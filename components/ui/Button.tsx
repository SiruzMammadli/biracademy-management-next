'use client';
import {css, SerializedStyles} from "@emotion/react";
import {Spinner} from "@/components/ui";

export default ({children, style: css, variant = 'primary', size, ...props}: ButtonProps) => {
    return (
        <button
            disabled={props.disabled}
            onClick={props.onClick}
            css={[
                styles._,
                styles[variant as keyof ButtonProps["variant"]],
                styles[size as keyof ButtonProps["size"]],
                props.disabled ? styles.disabled : undefined,
                css
            ]}
        >
            {props.disabled ? <Spinner color="light"/> : children}
        </button>
    )
}

type ButtonProps = React.PropsWithChildren<Readonly<{
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    style?: SerializedStyles;
    variant?: 'primary' | 'outlined' | 'dark';
    size?: 'icon';
    disabled?: boolean;
}>>;

const styles = {
    _: css`
        height: 40px;
        border-radius: 8px;
        padding-inline: 16px;
        white-space: nowrap;
        width: 100%;
        text-align: center;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        column-gap: 6px;
    `,
    disabled: css`
        opacity: .5;
        pointer-events: none;
    `,
    icon: css`
        padding-inline: 0;
        width: 40px;
        height: 40px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    `,
    primary: css`
        background-color: rgb(var(--primary-800));
        color: white;
        transition-property: color, background-color;
        transition-duration: 150ms;

        :hover {
            background-color: rgb(var(--primary-700));
        }
    `,
    dark: css`
        background-color: rgb(var(--slate-900));
        color: white;
        transition-property: color, background-color;
        transition-duration: 150ms;

        :hover {
            background-color: rgb(var(--slate-800));
        }
    `,
    outlined: css`
        border: 2px solid rgb(var(--slate-200));
        color: rgb(var(--slate-950));
        transition-property: color, background-color;
        transition-duration: 150ms;

        :hover {
            border-color: rgb(var(--slate-50));
            background-color: rgb(var(--slate-50));
        }
    `,
}