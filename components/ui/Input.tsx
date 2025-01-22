'use client';
import {css, SerializedStyles} from "@emotion/react";

export default (
    {
        id,
        placeholder,
        children,
        type = "text",
        ...props
    }: Readonly<{
        id?: string;
        placeholder?: string;
        type?: React.HTMLInputTypeAttribute;
        children?: React.ReactNode;
        className?: string;
        name?: string;
        style?: SerializedStyles;
        defaultValue?: string;
    }>
) => {
    return (
        <div css={[styles._, props.style]}>
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                name={props.name}
                defaultValue={props.defaultValue}
            />
            {children}
        </div>
    );
};

const styles = {
    _: css`
        width: 100%;
        height: 40px;
        border: var(--border-template);
        border-radius: 8px;
        margin-bottom: 12px;
        overflow: hidden;
        
        :has(> input:focus) {
            border-color: rgb(var(--primary-800));
        }
        
        > input {
            width: 100%;
            height: 100%;
            font-weight: 400;
            
            ::placeholder {
                color: rgb(var(--slate-400));
            }
        }
    `,
}