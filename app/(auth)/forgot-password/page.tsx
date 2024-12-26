'use client';
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import {InputField} from "@/components/form";
import {Button, Flex} from "@/components/ui";

export default () => {
    return (
        <AuthLayout>
            <Flex
                direction="column"
                style={authStyles._}
            >
                <Flex style={authStyles.back_navigation}>
                    <Link href="/signin">
                        <ArrowLeftIcon/>
                        <span>Geri</span>
                    </Link>
                </Flex>
                <div css={authStyles.header}>
                    <h1>Şifrəni bərpa et</h1>
                    <p>No worries! Enter your email address below, and we'll send you a link to reset your password</p>
                </div>
                <form css={authStyles.form}>
                    <InputField label="Email" placeholder="Email ünvanını daxil et" name="email"/>
                    <Button>Göndər</Button>
                </form>
            </Flex>
        </AuthLayout>
    )
}