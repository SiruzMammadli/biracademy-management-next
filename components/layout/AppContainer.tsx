'use client';
import {PropsWithChildren} from "react";
import {css} from "@emotion/react";
import {AppHeader} from "@/components/layout";

export default ({children}: PropsWithChildren) => {
    return (
        <div css={styles._}>
            <AppHeader />
            <main>
                {children}
            </main>
        </div>
    )
}

const styles = {
    _: css`
        background-color: white;
        border: var(--border-template);
        border-radius: 8px;
        
        > main {
            height: calc(100vh - var(--header-height));
            overflow-y: auto;
            padding: 24px;
            
            :not(:only-child) > *:not(:last-child) {
                margin-bottom: 16px;
            }
        }
    `,
}