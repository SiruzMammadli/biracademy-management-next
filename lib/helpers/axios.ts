import axios from "axios";
import {deleteCookieServer, getCookieServer, setCookieServer} from "@/lib/helpers/cookies";
import {StatusCodes} from "@/lib/helpers/statusCodes";
import {logToFile} from "@/lib/helpers/logging";

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
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => error
)

http.interceptors.response.use(
    response => response,
    async error => {
        const {config: originalRequest, response} = error;
        if (response && response.status === StatusCodes.Unauthorized && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const refreshToken = await getCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`);
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/refresh-token`, {
                    refresh_token: refreshToken,
                });

                if (res.status !== StatusCodes.Ok) {
                    logToFile(error.message);
                    window.location.href = '/signin';
                    return Promise.reject(error);
                }
                const {access_token, refresh_token} = res.data;

                await setCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`, access_token);
                await setCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`, refresh_token);
                http.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
                return http(originalRequest)
            } catch (e) {
                logToFile(e);
                await deleteCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_TOKEN_NAME}`);
                await deleteCookieServer(`${process.env.NEXT_PUBLIC_COOKIE_SID_NAME}`);
                window.location.href = '/signin';
                return Promise.reject(e);
            }
        }
        logToFile(error.message);
        window.location.href = '/signin';
        return Promise.reject(error)
    }
);