'use client';
import {css} from "@emotion/react";
import {ChevronLeftIcon} from "lucide-react";
import {Flex} from "@/components/ui";
import {SidebarNavListItemType} from "@/components/layout/types";
import SidebarNavListItem from "@/components/layout/sidebar/SidebarNavListItem";

export default function Collapsible({summary, items, icon, expanded}: {
    summary: string;
    items: SidebarNavListItemType[];
    icon: React.ReactNode;
    expanded?: boolean;
}) {
    return (
        <details css={styles._} open={expanded}>
            <summary>
                {icon}
                <span>{summary}</span>
                <span>
                    <ChevronLeftIcon/>
                </span>
            </summary>
            <div css={styles.content}>
                <Flex
                    as="ul"
                    direction="column"
                    gapY="4px"
                >
                    {items.map((item, key) => {
                        return "href" in item ? (
                            <SidebarNavListItem
                                key={key}
                                icon={item.icon}
                                label={item.label}
                                href={item.href}
                            />
                        ) : null;
                    })}
                </Flex>
            </div>
        </details>
    )
}

const styles = {
    _: css`
        overflow: hidden;

        > summary {
            display: flex;
            align-items: center;
            column-gap: 12px;
            padding: 8px 12px;
            border-radius: 8px;
            height: 40px;
            transition-property: color, background-color;
            transition-duration: 150ms;
            cursor: pointer;
            position: relative;
            user-select: none;

            :hover {
                background-color: rgb(var(--slate-200));
            }

            > * {
                flex-shrink: 0;
            }

            > svg {
                color: rgb(var(--slate-500));
            }

            ::marker {
                content: '';
            }

            > span {
                :last-of-type {
                    position: absolute;
                    top: 50%;
                    right: 12px;
                    translate: 0 -50%;

                    > svg {
                        width: 14px;
                        height: 14px;
                        color: rgb(var(--slate-500));
                        transition-duration: 150ms;
                        transition-property: rotate;
                    }
                }
            }
        }

        &::details-content {
            block-size: 0;
            transition-duration: 150ms;
            transition-property: block-size, content-visibility;
            transition-behavior: allow-discrete;
        }

        &[open] {
            &::details-content {
                block-size: auto;
            }

            > summary {
                > span {
                    :last-of-type {
                        > svg {
                            rotate: -90deg;
                        }
                    }
                }
            }
        }
    `,
    content: css`
        > ul {
            border-left: 1px solid rgb(var(--slate-300));
            margin-top: 4px;
            margin-left: 20px;

            > li {
                margin-left: 6px;
            }
        }
    `,
    link: css`
        display: flex;
        align-items: center;
        padding: 8px 12px;
        border-radius: 8px;
        height: 36px;
        transition-property: color, background-color;
        transition-duration: 150ms;
        user-select: none;

        :hover {
            background-color: rgb(var(--slate-200));
        }
    `
}