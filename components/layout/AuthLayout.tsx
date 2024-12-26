'use client';
import {css} from "@emotion/react";

export default ({ children }: Readonly<React.PropsWithChildren>) => {
    return (
        <div css={styles._}>
            <div css={styles.layout_left}>{children}</div>
            <div css={styles.layout_right}>
                Picture
            </div>
        </div>
    );
};

const styles = {
    _: css`
        height: 100dvh;
        background-color: white;
        padding: 8px;
        display: grid;

        @media (width >= 1024px) {
            grid-template-columns: repeat(2, 1fr);
        }
    `,
    layout_left: css`
        margin-inline: auto;
        width: 90%;
        
        @media (width >= 640px) {
            width: 50%;
        }
    `,
    layout_right: css`
        background-color: rgb(var(--slate-900));
        border-radius: 8px;
        display: none;
        
        @media (width >= 1024px) {
            display: block;
        }
    `,
}