import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import NavBar from '../../components/NavBar';
import { MenuConstant } from '../../components/NavBar/types';
import OnboardContent from '../../components/OnboardContent';
import CBOHelpers from '../../utils/helperFunctions';
import { ScreensPros } from '../types';
import './index.scss';

const StripeConfig: React.FC<ScreensPros> = ({setScreen}) => {
    const [loader, setLoader] = useState<boolean | null>(null);

    useEffect(() => {
        const stripeConfig = CBOHelpers.getStorage('imported-stripe-config');
        if(stripeConfig && stripeConfig === 'yes') {
            setLoader(false);
            return;
        }
       
        // fake api call, some custom timeout for real feel ;)
        setLoader(true);
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(() => {
                setLoader(false);
                CBOHelpers.setStorage('imported-stripe-config', 'yes');
            })
            .then(json => console.log(json))
        }, 2000);

    }, [])

    

    return (
        <div className='cbo-stripe-config'>

            <NavBar activeMenu={MenuConstant.CONFIGURE} setScreen={setScreen}/>

            <div className="cbo-onboard-step">
                {loader === true ? (<>
                    <Loader />
                    <OnboardContent 
                        title="Importing Stripe Configurations"
                        subtitle='Please wait while we are importing your Stripe configurations. It will only take a few seconds…'
                    />
                </>) : (
                    <OnboardContent 
                        title="WOW! Imported the Stripe Configurations"
                        subtitle='Thanks for waiting. We are done. Enjoy our services.'
                    />
                )}
                
            </div>
        </div>
    )
}

export default StripeConfig;