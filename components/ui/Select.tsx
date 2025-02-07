'use client';
import {css} from "@emotion/react";
import {ChevronsUpDownIcon} from "lucide-react";
import {useState} from "react";
import {useClickAway} from "@/src/hooks";

const styles = {
    container: css`
        position: relative;
        width: 200px;
        padding: 0;
    `,
    _: css`
        display: block;
        width: 100%;
        position: relative;
        background-color: white;
        border: var(--border-template);
        border-radius: 8px;
        height: 40px;
        padding-inline: 10px 32px;
        cursor: pointer;
        align-content: center;
        user-select: none;

        > span {
            color: rgb(var(--slate-500));
            position: absolute;
            top: 50%;
            translate: 0 -50%;
            right: 10px;

            > svg {
                width: 14px;
                height: 14px;
            }
        }
    `,
    options: css`
        background-color: white;
        border: var(--border-template);
        border-radius: 8px;
        overflow: hidden;
        position: absolute;
        inset-inline: 0;
        top: calc(100% + 5px);
        translate: 0 5px;
        opacity: 0;
        visibility: hidden;

        &[aria-hidden=false] {
            opacity: 1;
            visibility: visible;
            translate: 0 0;
            transition-property: translate, opacity, visibility;
            transition-duration: 100ms;
        }

        > ul {
            > li {
                padding: 10px;
                cursor: pointer;
                transition-duration: 150ms;
                transition-property: background-color;

                :hover {
                    background-color: rgb(var(--slate-50));
                }
            }
        }
    `,
}

type Option = {
    value: string;
    label: string;
    selected?: boolean;
}

type SelectProps = {
    options: Array<Option>;
};
export default function Select(props: SelectProps) {
    const [isHidden, setHidden] = useState(true);
    const [selectedOption, setSelectedOptions] = useState<Option>(props.options.find(option => option.selected)!);

    const ref = useClickAway<HTMLDivElement>(() => setHidden(true));

    return (
        <div css={styles.container} ref={ref}>
            <button
                css={styles._}
                onClick={() => setHidden(s => !s)}
            >
                {selectedOption.label}
                <span>
                    <ChevronsUpDownIcon/>
                </span>
            </button>
            <div aria-hidden={isHidden} css={styles.options}>
                <ul>
                    {props.options.map((option) => (
                        <Option
                            key={option.value}
                            option={option}
                            set={{ options: setSelectedOptions, hidden: setHidden }}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

function Option({option, set}: {
    option: Option,
    set: {
        options: React.Dispatch<React.SetStateAction<Option>>,
        hidden: React.Dispatch<React.SetStateAction<boolean>>
    }
}) {
    return (
        <li value={option.value} onClick={() => {
            set.options(option)
            set.hidden(true);
        }}>{option.label}</li>
    )
}