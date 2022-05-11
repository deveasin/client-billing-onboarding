import './index.scss';
import { SelectProps } from './types';

const Select: React.FC<SelectProps> = ({value, options, onChange}) => {
    return (
        <select className="cbo-select" onChange={onChange} value={value || ''}>
            {
                options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)
            }
        </select>
    )
}

export default Select;