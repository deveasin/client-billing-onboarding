import { BackButtonProps } from './types';
import BackButtonIcon from '../../assets/images/back-button-icon.png';
import './index.scss';

const BackButton: React.FC<BackButtonProps> = ({title, onClick}) => {

    return (
        <div className="cbo-back-button" onClick={onClick || (() => '')}>
            <img src={BackButtonIcon} alt="Back Button Icon" />
            <span>{title}</span>
        </div>
    )
}

export default BackButton;