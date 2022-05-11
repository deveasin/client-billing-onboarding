export interface ButtonProps {
    title: string;
    onClick?: () => void;
    style?: Object;
    disabled?: boolean;
    icon?:string;
    className?: string;
}
