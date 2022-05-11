import React from 'react';
import CBOHelpers from '../../utils/helperFunctions';
import './index.scss';
import { RemoveCacheProps } from './types';

const RemoveCache: React.FC<RemoveCacheProps> = ({setCache, cache}) => {
    if(cache === false) {
        return <></>;
    }

    const handleClick = () => {
        CBOHelpers.removeStorage('stripe-connected');
        CBOHelpers.removeStorage('finished-setup');
        CBOHelpers.removeStorage('imported-stripe-config');
        setCache(false);
    }

    return (
        <div className="cbo-remove-cache" onClick={handleClick}>
            Click this bar to reset cache from localStorage for better testing.
        </div>
    )
}

export default RemoveCache;