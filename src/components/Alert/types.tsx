export interface AlertProps {
    title: string;
    subtitle?: string;
    buttonText?: string;
    handleButtonClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void
}