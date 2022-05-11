import { ExternalLinkProps } from "./types";
import './index.scss';

const ExternalLink: React.FC<ExternalLinkProps> = ({children, icon, ...props}) => {
    return (
        <a className="cbo-external-link" {...props}>
            {children} 
            {icon && <img src={icon} alt="External Link Icon" />}
        </a>
    )
}

export default ExternalLink;