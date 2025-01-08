import axios from "axios";
import {getCookieServer} from "@/lib/helpers/getCookies";

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
});

http.interceptors.request.use(
    async (config) => {
        const token = await getCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    async (error) => {
        return error;
    })