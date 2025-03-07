import {css} from "@emotion/react";
import {PropsWithChildren} from "react";

export default ({title, children}: PropsWithChildren<{title: string;}>) => {
    return (
        <nav>
            <h6 css={styles.title}>{title}</h6>
            <div css={styles.content}>
                {children}
            </div>
        </nav>
    )
}

const styles = {
    title: css`
        letter-spacing: 1px;
        font-size: 11px;
        color: rgb(var(--slate-500));
    `,
    content: css`
        margin-top: 8px;
    `,
}