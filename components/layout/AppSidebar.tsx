'use client';
import {css} from "@emotion/react";
import {Flex} from "@/components/ui";
import {SidebarNavListType} from "@/components/layout/types";
import {
    CalendarIcon,
    GaugeIcon,
    SettingsIcon,
} from "lucide-react";
import SidebarNavList from "@/components/layout/sidebar/SidebarNavList";
import {UpgradePlanCard} from "@/components/layout";
import SidebarProfileMenu from "@/components/layout/sidebar/SidebarProfileMenu";
import {useAuth} from "@/src/providers/auth";

const navList: SidebarNavListType[] = [
    {
        title: "ƏSAS MENYU",
        items: [
            {icon: <GaugeIcon/>, label: 'İdarə paneli', href: '/app'},
            {icon: <CalendarIcon/>, label: 'Təqvim', href: '/app/calendar'},
            {icon: <SettingsIcon/>, label: 'Parametrlər', href: '/app/settings'},
        ]
    },
    // {
    //     title: "TEAM MANAGEMENT",
    //     items: [
    //         {icon: <ChartAreaIcon/>, label: 'Performance', href: '/app/performance'},
    //         {icon: <ReceiptTextIcon/>, label: 'Invoices', href: '/app/invoices'},
    //         {icon: <UsersIcon/>, label: 'Employees', href: '/app/employees'},
    //         {icon: <UserPlusIcon/>, label: 'Hiring', href: '/app/hiring'},
    //     ]
    // }
]

export default () => {
    const auth = useAuth();
    return (
        <Flex
            as="aside"
            direction="column"
            style={styles._}
        >
            <Flex
                justifyContent="space-between"
                style={styles.channels_drop}
            >
                <div>Channels Drop</div>
            </Flex>
            <section css={styles.nav_lists}>
                {navList.map((nav, key) => (
                    <SidebarNavList key={key} title={nav.title} items={nav.items}/>
                ))}
            </section>
            {/*<UpgradePlanCard/>*/}
            {auth?.user ? <SidebarProfileMenu/> : null}
        </Flex>
    )
}

const styles = {
    _: css`
        height: calc(100dvh - 16px);
        padding: 8px;
        white-space: nowrap;
        overflow: hidden;

        & > * + * {
            margin-top: 12px;
        }

        & > section > * + * {
            margin-top: 12px;
        }
    `,
    channels_drop: css`
        height: 40px;
    `,
    nav_lists: css`
        flex-grow: 1;
    `,
}