'use client'
import {EyeIcon, EyeOffIcon} from "lucide-react";
import {useState} from "react";
import Input from "@/components/ui/Input";
import {css} from "@emotion/react";

export default (
    {
        id,
        placeholder,
        isPasswordSecure = true,
        ...props
    }: Readonly<{
        id?: string;
        placeholder?: string;
        isPasswordSecure?: boolean;
        name?: string;
        register?: any;
    }>
) => {
    const [isSecure, setIsSecure] = useState(isPasswordSecure);

    const handleClick = () => setIsSecure(prev => !prev);

    return (
        <Input
            id={id}
            placeholder={placeholder}
            type={isSecure ? "password" : "text"}
            name={props.name}
            register={props.register}
            style={styles._}
        >
            {isSecure ? (
                <EyeIcon css={styles.eye_icon} onClick={handleClick}/>
            ) : (
                <EyeOffIcon css={styles.eye_icon} onClick={handleClick}/>
            )}
        </Input>
    )
}

const styles = {
    _: css`
        position: relative;
        padding-right: 40px !important;
    `,
    eye_icon: css`
        position: absolute;
        top: 50%;
        right: 10px;
        translate: 0 -50%;
        color: rgb(var(--slate-500));
        cursor: pointer;
        transition-property: color;
        transition-duration: 150ms;
        
        :hover {
            color: rgb(var(--slate-800));
        }
    `
}