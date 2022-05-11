import './index.scss';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({onChange = () => '', text, checked=false}) => {
    return (
        <label className="cbo-checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
            <span>{text}</span>
        </label>
    )
}

export default Checkbox;