import {css} from "@emotion/react";

export const authStyles = {
    _: css`
        width: 100%;
        margin-top: 60px;
    `,
    back_navigation: css`
        margin-bottom: 16px;
        
        > a {
            display: inline-flex;
            align-items: center;
            column-gap: 12px;
            color: rgb(var(--slate-500));
            
            > svg {
                width: 16px;
                height: 16px;
            }
            
            > span { font-weight: 400; }
        }
    `,
    header: css`
        text-align: center;

        > h1 {
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 8px;
        }

        > p {
            color: rgb(var(--slate-500));
            font-weight: 400;
        }
    `,
    header_icon: css`
        padding: 16px;
        background-color: rgb(var(--primary-50));
        border-radius: 100%;
    `,
    form: css`
        width: 100%;
        margin-top: 24px;

        > button {
            margin-top: 16px;
        }
    `,
    footer: css`
        margin-top: 16px;

        > span {
            color: rgb(var(--slate-500));
            font-weight: 400;
        }

        > a {
            :hover {
                text-decoration: underline;
            }
        }
    `,
}