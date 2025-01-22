"use server";
import {z} from "zod";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {http} from "@/lib/helpers/axios";

const schema = z.object({
    email: z.string({invalid_type_error: "Email/Password is invalid"}).email(),
    password: z.string().min(5, {message: "Password must be at least 3 characters"}),
})

export const signin = async (_: unknown, formData: FormData) => {
    const validatedFields = schema.safeParse({
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }

    const res = await http.post(`/signin`, {
        email: formData.get("email"),
        password: formData.get("password"),
    });
    if (res.status === StatusCodes.Ok) {
        let date = new Date();
        let expires = new Date(date.setMonth(date.getDate() + 1));

        const cookieStore = await cookies();
        cookieStore.set({
            httpOnly: true,
            name: `${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`,
            value: res.data.access_token,
            path: '/',
            expires,
            secure: true,
            sameSite: 'lax',
        });
        cookieStore.set({
            httpOnly: true,
            name: `${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`,
            value: res.data.refresh_token,
            path: '/',
            expires,
            secure: true,
            sameSite: 'lax',
        });
        redirect("/app");
    }
}