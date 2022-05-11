import React from 'react';
import { TransactionCardProps } from './types';
import './index.scss';

const TransactionCard: React.FC<TransactionCardProps> = ({title, fee}) => {
    return (
        <div className="cbo-transaction-card">
            <h6 className='cbo-transaction-card-title'>{title} <span className='fee'>{fee}</span></h6>
        </div>
    )
}

export default TransactionCard;