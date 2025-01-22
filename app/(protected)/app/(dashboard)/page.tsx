'use client';
import {DashboardActionsSection, StatsOverallCardsSection} from "@/components/dashboard";
import Widget from "@/components/ui/Widget";

export default () => {
    return (
        <>
            <DashboardActionsSection/>
            <StatsOverallCardsSection/>
            <Widget>
                <Widget.Header title="Gəlir Statistikası"/>
            </Widget>
        </>
    )
}

