import React from 'react';
import NavBar from '../../components/NavBar';
import { MenuConstant } from '../../components/NavBar/types';
import OnboardContent from '../../components/OnboardContent';
import { ScreensPros } from '../types';

const Invoices: React.FC<ScreensPros> = ({setScreen}) => {
    return (
        <div className='cbo-invoices-config'>

            <NavBar activeMenu={MenuConstant.INVOICES} setScreen={setScreen} />

            <div className="cbo-onboard-step">
                <OnboardContent 
                    title="Invoices Screen"
                    subtitle='There is no further design for this screen.'
                />
            </div>
        </div>
    )
}

export default Invoices;