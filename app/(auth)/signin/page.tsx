'use client';
import AuthLayout from "@/components/layout/AuthLayout";
import {Button, Flex} from "@/components/ui";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import Link from "next/link";
import {CheckboxField, InputField} from "@/components/form";
import {useActionState, useState} from "react";
import {signin} from "@/app/(auth)/signin/actions";

export default () => {
    const [isRememberMe, setRememberMe] = useState<boolean>(false);
    const [_, action, pending] = useActionState(signin, null);

    return (
        <AuthLayout>
            <Flex
                direction="column"
                style={authStyles._}
            >
                <div css={authStyles.header}>
                    <h1>İdarəetmə panelinə xoş gəldin</h1>
                    <p>Davam etmək üçün email və şifrəni daxil et</p>
                </div>
                <form css={authStyles.form} action={action}>
                    <InputField label="Email" placeholder="Email ünvanını daxil et" name="email"/>
                    <InputField label="Şifrə" placeholder="Şifrəni daxil et" type="password" name="password"/>
                    <Flex justifyContent="flex-end">
                        {/*<Flex inline gapX="8px">*/}
                        {/*    <CheckboxField*/}
                        {/*        labelText="Yadda saxla"*/}
                        {/*        defaultChecked={isRememberMe}*/}
                        {/*        onCheckedChange={() => setRememberMe(state => !state)}*/}
                        {/*    />*/}
                        {/*</Flex>*/}
                        <Link href="/forgot-password">Şifrəni unutmusan?</Link>
                    </Flex>
                    <Button disabled={pending}>Daxil ol</Button>
                </form>
                <Flex
                    gapX="4px"
                    style={authStyles.footer}
                >
                    <span>Hələ də hesabın yoxdur?</span>
                    <Link href="/signup">Qeydiyyat</Link>
                </Flex>
            </Flex>
        </AuthLayout>
    );
};
