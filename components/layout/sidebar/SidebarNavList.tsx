'use client';
import {SidebarNavListType} from "@/components/layout/types";
import SidebarNavListItem from "@/components/layout/sidebar/SidebarNavListItem";
import {css} from "@emotion/react";
import {Flex} from "@/components/ui";

export default ({title, items}: Readonly<SidebarNavListType>) => {
    return (
        <nav>
            <h6 css={styles.title}>{title}</h6>
            <div css={styles.content}>
                <Flex
                    as="ul"
                    direction="column"
                    gapY="4px"
                >
                    {items.map((item, key) => (
                        <SidebarNavListItem key={key} {...item}/>
                    ))}
                </Flex>
            </div>
        </nav>
    )
}

const styles = {
    title: css`
        letter-spacing: 1px;
        font-size: 11px;
        color: rgb(var(--slate-500));
    `,
    content: css`
        margin-top: 8px;
    `,
}