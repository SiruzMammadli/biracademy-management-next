'use server'
import {http} from "@/lib/helpers/axios";
import {cookies} from "next/headers";
import {redirect} from "next/navigation";
import {StatusCodes} from "@/lib/helpers/statusCodes";

export const signout = async () => {
    const res = await http.post("/signout", {
        email: "admin@gmail.com"
    });
    if (res.status === StatusCodes.NoContent) {
        const cookieStore = await cookies();
        cookieStore.delete(`${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`);
        cookieStore.delete(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`);
        redirect("/signin");
    }
}