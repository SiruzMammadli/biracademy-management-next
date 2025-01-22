import {Gender, StudentActivity} from '@/src/types/enums';

export type Student = {
    id: string;
    fullname: string;
    email: string;
    phone: string;
    gender: keyof typeof Gender;
    activity: keyof typeof StudentActivity;
    created_at: string;
}