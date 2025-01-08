"use server";
import {z} from "zod";
import {redirect} from "next/navigation";
import axios from "axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

const schema = z.object({
    fullname: z.string().min(3, {message: "Fullname must be at least 3 characters"}),
    email: z.string({invalid_type_error: "Email/Password is invalid"}).email(),
    password: z.string({invalid_type_error: "Email/Password is invalid"})
        .min(5, {message: "Password must be at least 3 characters"}),
    repeat_password: z.string(),
    // image: z.instanceof(File)
    //     .refine((file) => {
    //         if (!file || file.name === undefined || file.size === 0) return true;
    //         return file.size <= 1024 * 1024;
    //     }, "Max image size is 1MB")
    //     .refine((file) => {
    //         if (!file || file.name === undefined || file.size === 0) return true;
    //         return ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(file.type);
    //     }, "Only .jpg, .png and .webp formats are supported.")
}).refine(data => data.password === data.repeat_password);

export const signup = async (_: unknown, formData: FormData) => {
    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
        repeat_password: formData.get("repeat_password"),
        image: formData.get("image"),
    });

    if (!validatedFields.success) return { errors: validatedFields.error.flatten().fieldErrors }

    const res = await axios.post("/signup", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
        timezone: new Intl.DateTimeFormat().resolvedOptions().timeZone,
    }, {
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        timeout: 5000
    });

    if (res.status === StatusCodes.Created) redirect("/signin");
}