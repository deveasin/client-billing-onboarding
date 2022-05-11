import React from 'react';
import OnboardContent from '../../components/OnboardContent';
import TransactionCard from '../../components/TransactionCard';
import Button from '../../components/Button';
import ExternalLink from '../../components/ExternalLink';
import ExternalLinkIcon from '../../assets/images/external-link-icon.png';
import { ButtonCallback } from './types';
const NotConnected: React.FC<ButtonCallback> = ({buttonCallback}) => {
    return (
        <>
            <OnboardContent 
                title="Connect Stripe Account"
                subtitle='Client Billing requires a free Stripe account, connect your existing account or create a new one to get started.'
            />

            <TransactionCard title="Transaction Fee" fee="5%"/>

            <Button title="Get Started" onClick={buttonCallback} />

            <br />

            <ExternalLink href="#" icon={ExternalLinkIcon}>Find out more about Client Billing</ExternalLink>
        </>
    )
}

export default NotConnected;