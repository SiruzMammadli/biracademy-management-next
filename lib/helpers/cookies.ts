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

export const setCookieServer = async (cookieName: string, value: string, expires?: Date) => {
    const cookieStore = await cookies();
    cookieStore.set({
        httpOnly: true,
        name: cookieName,
        value: value,
        path: '/',
        expires,
        secure: true,
        sameSite: 'strict',
    });
}