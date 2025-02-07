'use client';
import {ElementType, PropsWithChildren} from "react";
import {Flex} from "@/components/ui";
import {css} from "@emotion/react";

const styles = {
    _: css`
        :not(:last-of-type) {
            margin-bottom: 12px;
        }

        > div {

            :first-child {
                width: 25%;
                color: rgb(var(--slate-500));
                flex-shrink: 0;
            }

            :last-child {
                width: 75%;
                padding-inline: 10px;
                margin-bottom: 0;
            }
        }
    `
}

export default (props: PropsWithChildren<{icon: ElementType, title: string}>) => {
    return (
        <Flex style={styles._} gapX="16px">
            <Flex inline gapX="8px">
                <props.icon/>
                <h3>{props.title}</h3>
            </Flex>
            {props.children}
        </Flex>
    )
}