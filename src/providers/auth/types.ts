export type AuthContextType = {
    user?: User;
} | null;

export type User = {
    id: string;
    email: string;
    fullname: string;
    timezone: string;
    role: number;
} | null;