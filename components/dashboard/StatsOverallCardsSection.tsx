'use client';
import {css} from "@emotion/react";
import {Flex, StatsCardOverall} from "@/components/ui";
import {ArrowUpRightIcon} from "lucide-react";

export default () => {
    return (
        <section css={styles.statsOverallCardsContainer}>
            {/*<StatsCardOverall title="Card 1">*/}
            {/*    <Flex direction="column">*/}
            {/*        <Flex justifyContent="space-between" style={styles.totalEmployeeCardRow}>*/}
            {/*            <Flex inline gapX="12px">*/}
            {/*                <span>150</span>*/}
            {/*                <Flex inline gapX="2px">*/}
            {/*                    <ArrowUpRightIcon />*/}
            {/*                    <span>50</span>*/}
            {/*                </Flex>*/}
            {/*            </Flex>*/}
            {/*        </Flex>*/}
            {/*    </Flex>*/}
            {/*</StatsCardOverall>*/}
            <StatsCardOverall title="Card 1">
                ...
            </StatsCardOverall>
            <StatsCardOverall title="Card 2">
                ...
            </StatsCardOverall>
            <StatsCardOverall title="Card 3">
                ...
            </StatsCardOverall>
        </section>
    )
}

const styles = {
    statsOverallCardsContainer: css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    `,
    totalEmployeeCardRow: css`
        background-color: rgb(var(--emerald-50));
        padding: 4px 16px;
        border-radius: 6px;

        > div {
            :first-of-type {
                > span {
                    font-size: 20px;
                }
                
                > div {
                    color: rgb(var(--emerald-600));
                    background-color: rgb(var(--emerald-100));
                    padding-inline: 2px 4px;
                    border-radius: 2px;
                    
                    > svg {
                        width: 12px;
                        height: 12px;
                    }
                    
                    > span {
                        font-size: 12px;
                    }
                }
            }
        }
    `
}