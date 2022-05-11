import React from 'react';
import NavBar from '../../components/NavBar';
import { MenuConstant } from '../../components/NavBar/types';
import OnboardContent from '../../components/OnboardContent';
import { ScreensPros } from '../types';

const Products: React.FC<ScreensPros> = ({setScreen}) => {
    return (
        <div className='cbo-products-config'>

            <NavBar activeMenu={MenuConstant.PRODUCTS} setScreen={setScreen} />

            <div className="cbo-onboard-step">
                <OnboardContent 
                    title="Products Screen"
                    subtitle='There is no further design for this screen.'
                />
            </div>
        </div>
    )
}

export default Products;