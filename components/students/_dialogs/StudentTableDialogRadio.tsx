'use client';
import {css} from "@emotion/react";
import {useId} from "react";

const styles = {
    _: css`
        height: 40px;
        border: var(--border-template);
        border-radius: 8px;
        padding-inline: 10px;
        flex-basis: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        transition-property: background-color, border-color;
        transition-duration: 50ms;

        :has(> input[type=radio]:checked) {
            background-color: rgb(var(--primary-50));
            border-color: rgb(var(--primary-800));

            > input[type=radio] {
                border-color: rgb(var(--primary-800));

                ::before {
                    scale: .8;
                }
            }
        }

        > input[type=radio] {
            border: var(--border-template);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            position: relative;
            transition-property: border-color;
            transition-duration: 50ms;

            ::before {
                content: '';
                position: absolute;
                inset: 0;
                width: 12px;
                height: 12px;
                background: rgb(var(--primary-800));
                margin: auto;
                border-radius: 50%;
                flex-shrink: 0;
                scale: 0;
                transition-property: scale;
                transition-duration: 50ms;
            }
        }


        > label {
            cursor: pointer;
            flex: 1;
            line-height: 40px;
            padding-left: 16px;
        }
    `,
}

export default ({label, ...props}: StudentDialogRadio) => {
    const uuid = `radio:${useId()}`;
    return (
        <div css={styles._} onClick={props.onChange}>
            <input id={uuid} type="radio" value={props.value} defaultChecked={props.checked} name={props.name}/>
            <label htmlFor={uuid}>{label}</label>
        </div>
    )
}

type StudentDialogRadio = {
    label: string;
    name: string;
    checked?: boolean;
    onChange: () => void;
    value: string;
}