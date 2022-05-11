import { ButtonProps } from "./types";
import './index.scss';
import React from "react";

const Button: React.FC<ButtonProps> = ({title, icon, className = '', disabled=false, ...props}) => {
    return (
        <button className={`cbo-button ${className}`} disabled={disabled} {...props}>
            {icon && <img src={icon} alt="Button Icon" />}
            {title}
        </button>
    )
}

export default Button;