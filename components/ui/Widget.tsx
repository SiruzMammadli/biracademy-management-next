'use client';
import {css} from "@emotion/react";
import Flex from "@/components/ui/Flex";
import {EllipsisVerticalIcon} from "lucide-react";
import Dropdown from "@/components/ui/Dropdown";
import {PropsWithChildren} from "react";
import {Button} from "@/components/ui/index";

const styles = {
    widget: css`
        border: var(--border-template);
        border-radius: 8px;
        box-shadow: var(--shadow-sm);
        width: 100%;

        > * {
            padding: 12px;
        }
    `,
    widgetHeader: css`
        > h3 {
            font-weight: 600;
        }
    `,
    ellipsisIcon: css`
        width: 16px;
        height: 16px;
        color: rgb(var(--slate-500));
        transition: 150ms color;

        :hover {
            color: rgb(var(--slate-950));
        }
    `,
}

export default function Widget(props: PropsWithChildren) {
    return (
        <div css={styles.widget}>
            {props.children}
        </div>
    )
}

const WidgetHeader = (
    {
        hasDropdown = true,
        ...props
    }: PropsWithChildren<{
        title: string;
        hasDropdown?: boolean
    }>
) => {
    return (
        <Flex
            css={styles.widgetHeader}
            justifyContent="space-between"
        >
            <h3>{props.title}</h3>
            <Flex gapX="27px">
                <div>
                    {props.children}
                </div>
                {hasDropdown ? (
                    <Dropdown>
                        <Dropdown.Trigger>
                            <EllipsisVerticalIcon css={styles.ellipsisIcon}/>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Items>
                                <Dropdown.Item>
                                    salam
                                </Dropdown.Item>
                            </Dropdown.Items>
                        </Dropdown.Content>
                    </Dropdown>
                ) : null}
            </Flex>
        </Flex>
    )
}

Widget.Header = WidgetHeader;

const WidgetContent = ({children}: PropsWithChildren) => {
    return (
        <div>{children}</div>
    );
}

Widget.Content = WidgetContent;