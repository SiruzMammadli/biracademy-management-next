'use client'
import {usePathname} from "next/navigation";
import {SidebarNavItem} from "@/components/layout/types";
import Link from "next/link";
import {css} from "@emotion/react";
import {Flex} from "@/components/ui";

export default ({icon, label, href}: Readonly<SidebarNavItem>) => {
    const path = usePathname();

    return (
        <li>
            <Link
                href={href}
                css={styles.link(path === href)}
            >
                {icon}
                <Flex as="span" inline>{label}</Flex>
            </Link>
        </li>
    )
}

const styles = {
    link: (isMatchingPath: boolean) => css`
        display: flex;
        align-items: center;
        column-gap: 12px;
        padding: 8px 12px;
        border-radius: 8px;
        height: 40px;
        transition-property: color, background-color;
        transition-duration: 150ms;
        ${isMatchingPath ? `
            background-color: white;
            color: rgb(var(--slate-950));
            border: var(--border-template);
            padding-inline: 10px;
            box-shadow: var(--shadow-sm);
            
            :hover { background-color: rgb(var(--slate-50)); }
            > svg { color: rgb(var(--slate-950)); }
        ` : undefined}
        
        :hover { background-color: rgb(var(--slate-200)); }
        > * { flex-shrink: 0; }
        > svg { color: rgb(var(--slate-500)); }
    `,
}