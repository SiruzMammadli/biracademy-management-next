'use server';
import {cookies} from "next/headers";

export const getCookieServer = async (cookieName: string) => {
    const cookieStore = await cookies();
    return cookieStore.get(cookieName)?.value;
}

export const deleteCookieServer = async (cookieName: string) => {
    const cookieStore = await cookies();
    cookieStore.delete(cookieName);
}

export const setCookieServer = async (cookieName: string, value: any) => {
    const cookieStore = await cookies();
    cookieStore.set(cookieName, value);
}