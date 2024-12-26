'use client';
import {Checkbox} from "@/components/ui";
import {ChangeEventHandler, useId} from "react";
import {css} from "@emotion/react";

export default (props: CheckboxFieldProps) => {
    const uuid = useId();
    return (
        <>
            <Checkbox
                defaultChecked={props.defaultChecked}
                onCheckedChange={props.onCheckedChange}
                id={uuid}
            />
            <label
                htmlFor={uuid}
                css={styles.label}
            >
                {props.labelText}
            </label>
        </>
    )
}

type CheckboxFieldProps = Readonly<{
    labelText: string;
    defaultChecked?: boolean;
    onCheckedChange?: ChangeEventHandler<HTMLInputElement>;
}>

const styles = {
    label: css`
        cursor: pointer;
    `
}