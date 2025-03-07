'use client';
import {
    SidebarNavCollapsibleItem,
    SidebarNavItem,
    SidebarNavListItemType,
} from "@/components/layout/types";
import SidebarNavListItem from "@/components/layout/sidebar/SidebarNavListItem";
import {Flex} from "@/components/ui";
import Collapsible from "@/components/ui/Collapsible";

export default ({items}: Readonly<{items: SidebarNavListItemType[]}>) => {
    return (
        <Flex
            as="ul"
            direction="column"
            gapY="4px"
        >
            {items.map((item: SidebarNavItem | SidebarNavCollapsibleItem, key) => {
                return "collapsible" in item ? (
                    <Collapsible
                        key={key}
                        summary={item.label}
                        items={item.items}
                        icon={item.icon}
                        expanded={item.expanded}
                    />
                ) : "href" in item ? (
                    <SidebarNavListItem
                        key={key}
                        label={item.label}
                        icon={item.icon}
                        href={item.href}
                    />
                ) : null;
            })}
        </Flex>
    )
}