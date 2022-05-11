import WarningIcon from '../../assets/images/warning-icon.png';
import './index.scss';
import { WarningBoxProps } from './types';

const WarningBox: React.FC<WarningBoxProps> = ({text, style}) => {
    return (
        <div className="cbo-warning-box" style={style || {}}>
            <img src={WarningIcon} alt="Warning Icon" />
            <span>{text}</span>
        </div>
    )
}

export default WarningBox;