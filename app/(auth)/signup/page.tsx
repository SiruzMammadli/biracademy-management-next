'use client';
import AuthLayout from "@/components/layout/AuthLayout";
import Link from 'next/link'
import {Button, Flex} from "@/components/ui";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import {InputField} from "@/components/form";

export default () => {
    return (
        <AuthLayout>
            <Flex
                style={authStyles._}
                direction="column"
            >
                <div css={authStyles.header}>
                    <h1>Hesabını yarat</h1>
                    <p>Əsrarəngiz özəlliklərdən yararlanmaq üçün qeydiyyatdan keç</p>
                </div>
                <form css={authStyles.form}>
                    <InputField label="Ad Soyad" placeholder="Adını və soyadını daxil et" name="fullname"/>
                    <InputField label="Email" placeholder="Email ünvanını daxil et" type="email" name="email"
                              />
                    <InputField label="Şifrə" placeholder="Şifrəni daxil et" type="password" name="password"
                              />
                    <InputField label="Təkrar şifrə" placeholder="Təkrar şifrəni daxil et" type="password"
                               name="repeat_password"/>
                    <Button>Tamamla</Button>
                </form>
                <Flex
                    gapX="4px"
                    style={authStyles.footer}
                >
                    <span>Artıq bir hesabın var?</span>
                    <Link href="/signin">Daxil ol</Link>
                </Flex>
            </Flex>
        </AuthLayout>
    )
}