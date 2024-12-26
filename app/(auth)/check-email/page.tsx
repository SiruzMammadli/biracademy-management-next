'use client';
import {MailIcon} from "lucide-react";
import AuthLayout from "@/components/layout/AuthLayout";
import {Button, Flex} from "@/components/ui";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import {css} from "@emotion/react";
import Link from "next/link";

export default () => {
    const handleClick = () => window.open('https://gmail.com', "_blank");

    return (
        <AuthLayout>
            <Flex
                direction="column"
                style={authStyles._}
            >
                <Flex
                    justifyContent="center"
                    style={css`margin-bottom: 16px;`}
                >
                    <Flex
                        as="span"
                        inline
                        justifyContent="center"
                        style={authStyles.header_icon}
                    >
                        <MailIcon css={css`width: 54px;
                            height: 54px;
                            color: rgb(var(--primary-800));`}/>
                    </Flex>
                </Flex>
                <div css={authStyles.header}>
                    <h1>Email qutusuna göz at</h1>
                    <p>Email ünvanına şifrə sıfırlama linki göndərdik. Zəhmət olmasa, gələnlər qutusunu yoxlayın</p>
                </div>
                <Button style={css`margin-top: 24px;`} onClick={handleClick}>
                    Gmail-ə keç
                </Button>
                <Flex
                    gapX="4px"
                    style={authStyles.footer}
                >
                    <span>Sıfırlama linki göndərilmədi?</span>
                    <Link href="/signup">Yenidən göndər</Link>
                </Flex>
            </Flex>
            {/*<div className="w-full flex flex-col items-center mt-[60px]">*/}
            {/*    <div className="flex items-center">*/}
            {/*        <span className="inline-flex items-center justify-center p-[16px] bg-primary-50 rounded-full">*/}
            {/*            <MailIcon className="w-[54px] h-[54px] text-primary-800"/>*/}
            {/*        </span>*/}
            {/*    </div>*/}
            {/*    <div className="text-center mt-[16px]">*/}
            {/*        <h1 className="text-[24px] font-semibold mb-[8px]">Check your email</h1>*/}
            {/*        <p className="text-secondary-500 font-normal">We sent a password reset link to your email. Please*/}
            {/*            check your inbox</p>*/}
            {/*    </div>*/}
            {/*    <Button className="w-full h-[40px] rounded-[8px] mt-[24px]" onClick={handleClick}>Open Gmail</Button>*/}
            {/*    <div className="flex items-center gap-x-[4px] mt-[16px]">*/}
            {/*        <span className="text-secondary-500 font-normal">Didn't received the email?</span>*/}
            {/*        <button className="hover:underline">Resend</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </AuthLayout>
    )
};