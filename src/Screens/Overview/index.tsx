import React from 'react';
import NavBar from '../../components/NavBar';
import { MenuConstant } from '../../components/NavBar/types';
import OnboardContent from '../../components/OnboardContent';
import { ScreensPros } from '../types';

const Overview: React.FC<ScreensPros> = ({setScreen}) => {
    return (
        <div className='cbo-overview-config'>

            <NavBar activeMenu={MenuConstant.OVERVIEW} setScreen={setScreen} />

            <div className="cbo-onboard-step">
                <OnboardContent 
                    title="Overview Screen"
                    subtitle='There is no further design for this screen.'
                />
            </div>
        </div>
    )
}

export default Overview;