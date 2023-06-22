export type SideBarType = {
    icon: string;
    label: string;
    isSubMenu?: boolean;
    openIcon?: string;
    items?: SideBarType[];
};
