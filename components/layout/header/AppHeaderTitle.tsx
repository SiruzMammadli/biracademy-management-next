'use client';
import {RoutesDictionary} from "@/lib/helpers/routes";
import {usePathname} from "next/navigation";
import {css} from "@emotion/react";

export default () => {
    const path = usePathname();
    return (
        <h2 css={styles.title}>{RoutesDictionary[path as keyof typeof RoutesDictionary].label}</h2>
    )
}

const styles = {
    title: css`
        font-size: 21px;
    `
}