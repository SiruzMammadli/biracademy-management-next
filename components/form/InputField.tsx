'use client';
import {css} from "@emotion/react";
import {useId} from "react";
import {Input, InputWithPassword} from "@/components/ui";

export default (
    {
        label,
        placeholder,
        type,
        name,
        ...props
    }: Readonly<{
        label: string;
        placeholder?: string;
        type?: React.HTMLInputTypeAttribute;
        name?: string;
        register?: any;
        isPasswordSecure?: boolean;
    }>
) => {
    const uuid = useId();
    return (
        <div css={styles._}>
            <label htmlFor={uuid}>{label}</label>
            {type === 'password' ? (
                <InputWithPassword
                    id={uuid}
                    placeholder={placeholder}
                    name={name}
                    register={props.register}
                    isPasswordSecure={props.isPasswordSecure}
                />
            ) : (
                <Input
                    id={uuid}
                    placeholder={placeholder}
                    type={type}
                    name={name}
                    register={props.register}
                />
            )}
        </div>
    )
}

const styles = {
    _: css`
        > * { display: block; }
        > label { margin-bottom: 4px; }
        > div { padding-inline: 10px; }
    `
}