export interface HeaderProps {
    title: string;
    subtitle?: string;
    links?: {label: string, url: string}[];
    onClick?: () => void;
}