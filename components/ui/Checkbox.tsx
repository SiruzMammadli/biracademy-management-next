'use client';
import {css} from "@emotion/react";

export default (props: CheckboxProps) => {
    return (
        <input
            css={styles._}
            id={props.id}
            type="checkbox"
            defaultChecked={props.defaultChecked}
            onChange={props.onCheckedChange}
        />
    )
}

type CheckboxProps = Readonly<{
    id?: string;
    defaultChecked?: boolean;
    onCheckedChange?: React.ChangeEventHandler<HTMLInputElement>;
}>

const styles = {
    _: css`
        width: 16px;
        height: 16px;
        border: var(--border-template);
        border-radius: 4px;
        cursor: pointer;
        position: relative;

        &[checked]::after {
            scale: 1;
        }

        ::after {
            content: '✓';
            position: absolute;
            font-size: 10px;
            font-weight: 600;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            scale: 0;
            transition-duration: 50ms;
            transition-property: scale;
        }
    `
}