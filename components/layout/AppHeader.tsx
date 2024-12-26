'use client';
import {css} from "@emotion/react";
import {Button, Flex} from "@/components/ui";
import AppHeaderTitle from "@/components/layout/header/AppHeaderTitle";
import {BellIcon, MailIcon} from "lucide-react";

export default () => {
    return (
        <header css={styles._}>
            <Flex
                justifyContent="space-between"
            >
                <AppHeaderTitle/>
                <Flex gapX="12px">
                    <Button variant="outlined" size="icon">
                        <MailIcon />
                    </Button>
                    <Button variant="outlined" size="icon">
                        <BellIcon />
                    </Button>
                </Flex>
            </Flex>
        </header>
    )
}

const styles = {
    _: css`
        border-bottom: var(--border-template);
        padding-inline: 24px;
        height: var(--header-height);
        
        > div {
            height: 100%;
        }
    `,
    icon: css`
        width: 40px;
        height: 40px;
    `,
}