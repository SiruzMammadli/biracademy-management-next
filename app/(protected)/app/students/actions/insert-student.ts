"use server"
import {z} from "zod";
import {http} from "@/lib/helpers/axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {Gender} from "@/src/types/enums";

const schema = z.object({
    fullname: z.string(),
    email: z.string().email(),
    phone: z.string(),
    gender: z.number()
        .refine(val => Object.keys(Gender).map(Number).includes(val))
});

export const insertStudent = async (_: unknown, formData: FormData) => {
    const validatedFields = schema.safeParse({
        fullname: formData.get('fullname'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        gender: Number(formData.get('gender')),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    const res = await http.post(`/students`, {
        fullname: validatedFields.data.fullname,
        email: validatedFields.data.email,
        phone: validatedFields.data.phone,
        gender: validatedFields.data.gender,
    });

    if (res.status === StatusCodes.Created) return {isCreated: true};
}