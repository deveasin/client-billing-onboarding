export interface NavBarProps {
    activeMenu: number;
    setScreen: (value: string) => void;
}

export enum MenuConstant {
    CONFIGURE,
    OVERVIEW,
    CLIENTS,
    PRODUCTS,
    INVOICES,
}