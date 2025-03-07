'use client';
import {useRouter} from "next/navigation";
import AuthLayout from "@/components/layout/AuthLayout";
import {CheckIcon} from "lucide-react";
import {Button, Flex} from "@/components/ui";
import {authStyles} from "@/app/(auth)/_styles/auth.styles";
import {css} from "@emotion/react";

export default () => {
    const router = useRouter();
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
                    <span css={authStyles.header_icon}>
                        <CheckIcon
                            css={css`width: 54px;
                            height: 54px;
                            color: rgb(var(--primary-800));`}
                        />
                    </span>
                </Flex>
                <div css={authStyles.header}>
                    <h1>Şifrə dəyişdirildi</h1>
                    <p>Artıq yeni şifrənlə daxil ola bilərsən. Hər hansı problemlə qarşılaşsan, dəstək xidməti ilə əlaqə
                        saxla</p>
                </div>
                <Button variant="primary" style={css`margin-top: 24px;`} onClick={() => router.replace('/signin')}>Giriş səhifəsinə qayıt</Button>
            </Flex>
        </AuthLayout>
    )
}