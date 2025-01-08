'use client';
import {Button, Flex} from "@/components/ui";
import {css} from "@emotion/react";
import {DownloadIcon} from "lucide-react";

export default () => {
    return (
        <Flex justifyContent="space-between">
            <div>filter calendar</div>
            <Button
                style={css`width: max-content;`}
            >
                <DownloadIcon />
                <span>Export</span>
            </Button>
        </Flex>
    )
}