export type SidebarNavListType = {
    title: string;
    items: SidebarNavItem[],
}

export type SidebarNavItem = {icon: React.ReactNode, label: string, href: string}

export type ProfileDropdownItem = {
    label: string;
    icon: React.ElementType,
    onClick?: () => void | Promise<void>;
}