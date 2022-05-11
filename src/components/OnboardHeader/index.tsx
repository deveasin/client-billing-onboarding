import React from 'react';
import { OnboardHeaderPros } from './types';
import './index.scss';

const OnboardHeader: React.FC<OnboardHeaderPros> = ({totalStepCount, currentStepCount, title}) => {
    return (
        <div className="cbo-onboard-header">
            <h2 className='cbo-onboard-header-title'>{title}</h2>
            <span className='cbo-onboard-header-step'>
                Step {currentStepCount} of {totalStepCount}

                <ul className='cbo-onboard-header-dots'>
                    {Array.from(Array(totalStepCount).keys()).map(number => (
                        <li key={number} className={(number + 1) === currentStepCount ? 'active' : ''}></li>
                    ))}
                </ul>
            </span>
        </div>
    )
}

export default OnboardHeader;