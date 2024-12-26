'use client';
import AuthLayout from "@/components/layout/AuthLayout";
import Link from "next/link";
import {ArrowLeftIcon} from "lucide-react";
import {Button, Flex} from "@/components/ui";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import {InputField} from "@/components/form";

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
                    <h1>Yeni şifrə yarat</h1>
                    <p>Sıfırlama prosesini başa çatdırmaq üçün aşağıya yeni şifrəni daxil et. Güclü və təhlükəsiz
                        olduğundan əmin ol</p>
                </div>
                <form css={authStyles.form}>
                    <InputField label="Yeni şifrə" placeholder="Yeni şifrəni daxil et" name="new_password"
                                type="password"
                                isPasswordSecure={false}/>
                    <InputField label="Təkrar şifrə" placeholder="Təkrar şifrəni daxil et" name="repeat_new_password"
                                type="password" isPasswordSecure={false}/>
                    <Button>Tamamla</Button>
                </form>
            </Flex>
        </AuthLayout>
    )
}