import React from 'react';
import OnboardHeader from '../../components/OnboardHeader';
import stripeIcon from '../../assets/images/stripe-icon.png';
import { ScreensPros } from '../types';
import Alert from '../../components/Alert';
import './index.scss';
import { ScreenNames } from '..';
import CBOHelpers from '../../utils/helperFunctions';
import NotConnected from './NotConnected';
import Connected from './Connected';

const OnboardFirstStep: React.FC<ScreensPros> = ({setScreen, setCache}) => {
    const stripeConnect = CBOHelpers.getStorage('stripe-connected');

    return (
        <div className='cbo-onboard-first-step'>
            <Alert 
                title="Upgrade to pay 0% transaction fee" 
                subtitle='Pay 0% transaction fee and get added benefits by upgrading your account.' 
                handleButtonClick={(e) => {
                    e.preventDefault();
                    alert("Upgraded!!");
                }}
            />

            <div className="cbo-onboard-step">
                <OnboardHeader 
                    title="Getting Started"
                    totalStepCount={2}
                    currentStepCount={1}
                />
                
                <div className="cbo-onboard-inner-section">
                    <img className='stripe-icon' src={stripeIcon} alt="Stripe Icon" />

                    {stripeConnect === 'yes' ? 
                        <Connected buttonCallback={() => {
                            let isFinished = CBOHelpers.getStorage('finished-setup');

                            if(isFinished && isFinished === 'yes') {
                                setScreen(ScreenNames.StripeConfig);
                            } else {
                                setScreen(ScreenNames.OnboardSecondStep);
                            }
                        }}/>
                        :
                        <NotConnected buttonCallback={() => {
                            setScreen(ScreenNames.OnboardSecondStep);
                            CBOHelpers.toast("Stripe account connected successfully!", 3000);
                            CBOHelpers.setStorage('stripe-connected', 'yes');
                            setCache(true);
                        }}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default OnboardFirstStep;