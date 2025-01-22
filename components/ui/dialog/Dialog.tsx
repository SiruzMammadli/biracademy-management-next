'use client';
import {css} from "@emotion/react";
import {Button, Flex} from "@/components/ui";
import {XIcon} from "lucide-react";
import {PropsWithChildren, useRef} from "react";

const styles = {
    backdrop: css`
        display: grid;
        place-items: center;
        position: fixed;
        inset: 0;
        background-color: rgb(var(--slate-950) / .1);
        backdrop-filter: blur(1px);
    `,
    _: css`
        background-color: white;
        border: var(--border-template);
        border-radius: 8px;
        box-shadow: var(--shadow-sm);
        width: 640px;
        
        > * {
            padding-inline: 12px;
        }
    `,
    header: css`
        border-bottom: var(--border-template);
        padding-block: 16px;

        > span {
            font-size: 16px;
            font-weight: 600;
        }
    `,
    content: css`
        padding-block: 16px;
    `,
    footer: css`
        padding-block: 12px;
        
        > button {
            width: max-content;
        }
    `,
};

export default function Dialog(props: PropsWithChildren<{ title?: string; onClose?: () => void; }>) {
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div css={styles.backdrop}
             onMouseUp={({target}) => {
                 if (ref.current === target && props.onClose) props.onClose();
             }}
             ref={ref}
        >
            <div css={styles._}>
                <Flex
                    style={styles.header}
                    justifyContent={props.title ? 'space-between' : 'flex-end'}
                >
                    {props.title ? <span>{props.title}</span> : null}
                    <button onClick={props.onClose}><XIcon/></button>
                </Flex>
                {props.children}
            </div>
        </div>
    )
}

export const DialogContent = ({children}: PropsWithChildren) => {
    return (
        <div css={styles.content}>
            {children}
        </div>
    )
}

export const DialogFooter = ({children}: PropsWithChildren) => {
    return (
        <Flex style={styles.footer} justifyContent="flex-end">
            {children}
        </Flex>
    )
}

Dialog.Content = DialogContent;
Dialog.Footer = DialogFooter;