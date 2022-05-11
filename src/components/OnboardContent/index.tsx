import React from 'react';
import { OnboardContentProps } from './types';
import './index.scss';

const OnboardContent: React.FC<OnboardContentProps> = ({title, subtitle}) => {
    return (
        <div className="cbo-onboard-content">
            <h3 className='cbo-onboard-content-title'>{title}</h3>
            {subtitle && <p className='cbo-onboard-content-subtitle'>{subtitle}</p>}
        </div>
    )
}

export default OnboardContent;