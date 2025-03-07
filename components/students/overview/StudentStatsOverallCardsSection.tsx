'use client';
import {css} from "@emotion/react";
import {Flex, StatsCardOverall} from "@/components/ui";
import {formatCurrency, formatNumber} from "@/lib/helpers/utils";

export default () => {
    const newStudentsCount = formatNumber(12000);
    const studentsIncome = formatCurrency(12000);

    return (
        <section css={styles.statsOverallCardsContainer}>
            <StatsCardOverall title="Yeni tələbələr">
                <CardOverallContent label={newStudentsCount} paragraph="20 gündə 80% artış"/>
            </StatsCardOverall>
            <StatsCardOverall title="Ümumi tələbələr">
                <CardOverallContent label={newStudentsCount} paragraph="Əvvəlkilə müqayisədə 80% artış"/>
            </StatsCardOverall>
            <StatsCardOverall title="Tələbə gəlirləri">
                <CardOverallContent label={studentsIncome} paragraph="20 gündə 80% artış"/>
            </StatsCardOverall>
        </section>
    )
}

const CardOverallContent = ({label, paragraph}: { label: string, paragraph: string; }) => {
    return (
        <Flex>
            <Flex
                style={styles.studentsOverallInfo}
                direction="column"
                gapY="6px"
            >
                <p>{label}</p>
                <p>{paragraph}</p>
            </Flex>
            <div></div>
        </Flex>
    )
}

const styles = {
    statsOverallCardsContainer: css`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
    `,
    studentsOverallInfo: css`
        > p {
            :first-of-type {
                font-size: 24px;
                font-weight: 600;
            }

            :last-of-type {
                font-size: 14px;
                color: rgb(var(--slate-500));
            }
        }
    `,
}