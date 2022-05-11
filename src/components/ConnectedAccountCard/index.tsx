import StatusOkIcon from '../../assets/images/status-ok.png';
import './index.scss';
import { ConnectedAccountProps } from './types';

const ConnectedAccountCard: React.FC<ConnectedAccountProps> = ({title, email}) => {
    return (
        <div className="cbo-connected-account">
            <div className="cbo-connected-account-data">
                <h5 className="cbo-connected-account-data-title">{title}</h5>
                <p className="cbo-connected-account-data-email">{email}</p>
            </div>

            <div className="cbo-connected-account-status">
                <span className="cbo-connected-account-status-text">Connected</span>
                <img className="cbo-connected-account-status-icon" src={StatusOkIcon} alt="Status Icon" />
            </div>
        </div>
    )
}

export default ConnectedAccountCard;