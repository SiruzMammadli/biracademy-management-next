'use client';
import {css} from "@emotion/react";
import {Flex} from "@/components/ui";
import {GemIcon} from "lucide-react";

export default () => {
    const totalTrialDays = 14;
    const lastTrialDays = 5;

    return (
        <div css={styles._}>
            <Flex gapX="12px">
                <Flex
                    as="span"
                    justifyContent="center"
                    style={styles.icon_wrapper}
                >
                    <GemIcon />
                    <GemIcon />
                </Flex>
                <div css={styles.content}>
                    <h5>Upgrade plan</h5>
                    <p>Your free trial will be over</p>
                </div>
            </Flex>
            <div>
                <div css={styles.progress(((lastTrialDays - 1) / totalTrialDays) * 100)}></div>
                <p css={styles.trial_days}>Day {lastTrialDays} of {totalTrialDays}</p>
            </div>
        </div>
    )
}

const styles = {
    _: css`
        background-color: white;
        color: rgb(var(--slate-950));
        border: var(--border-template);
        border-radius: 8px;
        padding: 10px;
        box-shadow: var(--shadow-sm);
        cursor: pointer;
        
        > * {
            flex-shrink: 0;
        }
        
        > div {
            :nth-of-type(2) {
                margin-top: 16px;
            }
        }
    `,
    content: css`
        > h5 {
            font-weight: 600;
            line-height: 1.4;
        }
        > p {
            font-size: 12px;
            color: rgb(var(--slate-500));
        }
    `,
    icon_wrapper: css`
        background-color: rgb(var(--primary-800));
        width: 35px;
        height: 35px;
        flex-shrink: 0;
        border-radius: 8px;
        position: relative;

        > svg:first-of-type {
            z-index: 1;
            color: rgb(var(--slate-300));
        }

        > svg:last-of-type {
            position: absolute;
            inset: 0;
            margin: auto;
            color: rgb(0 0 0 / 20%);
            filter: blur(1px);
            translate: -2px 2px;
            z-index: 0;
        }
    `,
    progress: (width: number) => css`
        background-color: rgb(var(--slate-100));
        height: 10px;
        border-radius: 10px;
        position: relative;
        overflow: hidden;
        
        ::before {
            content: '';
            position: absolute;
            inset-block: 0;
            left: 0;
            background-color: rgb(var(--primary-800));
            border-radius: 10px;
            width: ${width}%;
        }
    `,
    trial_days: css`
        margin-top: 8px;
        font-weight: 600;
        color: rgb(var(--primary-800));
    `,
}