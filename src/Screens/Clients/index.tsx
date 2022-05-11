import React from 'react';
import NavBar from '../../components/NavBar';
import { MenuConstant } from '../../components/NavBar/types';
import OnboardContent from '../../components/OnboardContent';
import { ScreensPros } from '../types';

const Clients: React.FC<ScreensPros> = ({setScreen}) => {
    return (
        <div className='cbo-clients-config'>

            <NavBar activeMenu={MenuConstant.CLIENTS} setScreen={setScreen} />

            <div className="cbo-onboard-step">
                <OnboardContent 
                    title="Clients Screen"
                    subtitle='There is no further design for this screen.'
                />
            </div>
        </div>
    )
}

export default Clients;