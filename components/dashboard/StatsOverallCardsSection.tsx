'use client';
import {css} from "@emotion/react";
import {StatsCardOverall} from "@/components/ui";

export default () => {
    return (
        <section css={styles.statsOverallCardsContainer}>
            <StatsCardOverall title="Card 1"/>
            <StatsCardOverall title="Card 2"/>
            <StatsCardOverall title="Card 3"/>
        </section>
    )
}

const styles = {
    statsOverallCardsContainer: css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    `
}