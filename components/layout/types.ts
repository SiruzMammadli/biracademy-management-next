export type SidebarNavListType = {
    title: string;
    items: SidebarNavListItemType[],
}

export type SidebarNavListItemType = SidebarNavItem | SidebarNavCollapsibleItem;

export type SidebarNavItem = {
    href: string;
    icon: React.ReactNode,
    label: string,
}

export type SidebarNavCollapsibleItem = {
    label: string,
    collapsible?: boolean;
    items: SidebarNavListItemType[];
    icon: React.ReactNode;
    expanded?: boolean;
}

export type ProfileDropdownItem = {
    label: string;
    icon: React.ElementType,
    onClick?: () => void | Promise<void>;
}