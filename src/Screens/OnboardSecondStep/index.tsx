import React, { useCallback, useState } from 'react';
import OnboardHeader from '../../components/OnboardHeader';
import OnboardContent from '../../components/OnboardContent';
import { ScreensPros } from '../types';
import Button from '../../components/Button';
import './index.scss';
import BackButton from '../../components/BackButton';
import { ScreenNames } from '..';
import WarningBox from '../../components/WarningBox';
import Select from '../../components/Select';
import Checkbox from '../../components/Checkbox';
import CBOHelpers from '../../utils/helperFunctions';

const OnboardSecondStep: React.FC<ScreensPros> = ({setScreen}) => {
    const [currency, setCurrency] = useState<string>("");
    const [confirm, setConfirm] = useState<boolean>(false);

    const handleBackButton = useCallback(() => {
        setScreen(ScreenNames.OnboardFirstStep);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='cbo-onboard-second-step'>
            <div className="cbo-onboard-step">
                <OnboardHeader 
                    title="Getting Started"
                    totalStepCount={2}
                    currentStepCount={2}
                />
                <div className="cbo-onboard-inner-section">
                    <BackButton title="Back" onClick={handleBackButton} />

                    <OnboardContent 
                        title="Choose Billing Currency"
                        subtitle='Select the currency you want to use to bill your clients.'
                    />

                    <WarningBox
                        style={{
                            width: '600px'
                        }}
                        text="Note: Billing currency cannot be changed in the future. Please make sure you select the correct currency."
                    />

                    <br />

                    <Select 
                        options={
                            [
                                {
                                    label: "USD - United States Dollars",
                                    value: 'usd'
                                },
                                {
                                    label: "CAD - Canadian Dollars",
                                    value: 'cad',
                                },
                                {
                                    label: "BDT - Bangladeshi Taka",
                                    value: 'bdt'
                                }
                            ]
                        }
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    />
                    <br />
                    <Checkbox 
                        text="I am aware that I cannot change currency later" 
                        checked={confirm} 
                        onChange={() => setConfirm(prevConfirm => !prevConfirm)}
                    />

                    <br />

                    <Button
                        style={{minWidth: '126px'}}
                        title="Finish Setup" 
                        disabled={!confirm}
                        onClick={() => {
                            setScreen(ScreenNames.StripeConfig);
                            CBOHelpers.setStorage('finished-setup', 'yes');
                        }} 
                    />
                </div>
            </div>
        </div>
    )
}

export default OnboardSecondStep;