'use client';
import {createContext, PropsWithChildren, use, useLayoutEffect, useState} from "react";
import {AuthContextType} from "@/src/providers/auth/types";
import {http} from "@/lib/helpers/axios";
import {useQuery} from "@tanstack/react-query";
import {StatusCodes} from "@/lib/helpers/statusCodes";

const AuthContext = createContext<AuthContextType>(null);

export const useAuth = () => {
    const context = use(AuthContext);
    if (context === undefined) throw new Error("useAuth must be used within AuthContext");
    return context;
}

export const AuthProvider = ({children}: PropsWithChildren) => {
    const {data: user} = useQuery({
        queryKey: ['auth.current-user'],
        queryFn: async () => {
            const res = await http.get('/me');
            if (res.status === StatusCodes.Ok) {
                return res.data;
            }
            else throw Error(`Unable to retrieve user!\nStatus code: ${res.status}\nMessage: ${res.statusText}`);
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
    });

    return (
        <AuthContext value={{
            user,
        }}>
            {children}
        </AuthContext>
    )
}

