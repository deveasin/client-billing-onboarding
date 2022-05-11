import React from 'react';
import alertIcon from '../../assets/images/alert-icon.png';
import { AlertProps } from './types';
import './index.scss';

const Alert: React.FC<AlertProps> = ({title, subtitle, buttonText="Upgrade", handleButtonClick}) => {
    return (
        <div className="cbo-alert">
            <div className="cbo-alert-icon">
                <img src={alertIcon} alt="Alert Icon" />
            </div>
            <div className="cbo-alert-content">
                <h3 className='cbo-alert-content-title'>{title}</h3>
                {subtitle && <p className='cbo-alert-content-subtitle'>{subtitle}</p>}
            </div>

            <a href="_#" onClick={handleButtonClick} className='cbo-alert-button'>{buttonText}</a>
        </div>
    )
}

export default Alert;