"use server"
import {type TableRow} from "@/components/ui/Table";
import {z} from "zod";
import {http} from "@/lib/helpers/axios";
import {StatusCodes} from "@/lib/helpers/statusCodes";

const schema = z.object({
    id: z.string({invalid_type_error: "Student ID is invalid"}).uuid(),
});

export const deleteStudent = async (id: TableRow["id"]) => {
    const validatedFields = schema.safeParse({id});

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        }
    }
    const res = await http.delete(`/students/${id}`);

    return res.status === StatusCodes.NoContent;
}