import {useId} from "react";
import {css} from "@emotion/react";

export default (
    {
        label,
        name
    }: FileUploadFieldProps) => {
    const uuid = useId();
    return (
        <div css={styles._}>
            <label htmlFor={uuid}>{label}</label>
            <div>
                <input type="file" name={name} />
            </div>
        </div>
    )
}

type FileUploadFieldProps = {
    label: string;
    name?: string;
}

const styles = {
    _: css`
        > * {
            display: block;
        }

        > label {
            margin-bottom: 4px;
        }

        > div {
            padding: 12px;
            border: 2px dashed var(--border-color);
            border-radius: 8px;
        }
    `,
}