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
                <Button variant="primary" style={css`margin-top: 24px;`} onClick={handleClick}>
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
        </AuthLayout>
    )
};