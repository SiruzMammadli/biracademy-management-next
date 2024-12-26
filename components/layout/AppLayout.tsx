'use client';
import {PropsWithChildren} from "react";
import {css} from "@emotion/react";
import {AppContainer, AppSidebar} from "@/components/layout";

export default ({children}: PropsWithChildren) => {
    return (
        <div css={styles._}>
            <AppSidebar />
            <AppContainer>
                {children}
            </AppContainer>
        </div>
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
    `
}