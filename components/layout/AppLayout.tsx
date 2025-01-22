'use client';
import {PropsWithChildren} from "react";
import {css} from "@emotion/react";
import {AppContainer, AppSidebar} from "@/components/layout";
import {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {Flex, Spinner} from "@/components/ui";
import {useAuth} from "@/src/providers/auth";
import {DialogProvider} from "@/src/providers";

export default ({children}: PropsWithChildren) => {
    const auth = useAuth();
    return (
        <SkeletonTheme>
            {!auth?.user ? (
                <Flex
                    style={styles.loadingLayout}
                    justifyContent="center"
                >
                    <Spinner size={150} strokeWidth={3}/>
                </Flex>
            ) : null}
            <DialogProvider />
            <div css={styles._}>
                <AppSidebar/>
                <AppContainer>
                    {children}
                </AppContainer>
            </div>
        </SkeletonTheme>
    )
}

const styles = {
    _: css`
        display: grid;
        grid-template-columns: 250px 1fr;
        column-gap: 12px;
        height: 100dvh;
        overflow: hidden;
        padding: 8px;
    `,
    loadingLayout: css`
        background-color: rgb(255 255 255 / 40%);
        position: fixed;
        inset: 0;
        z-index: 1;
    `,
}