import React from 'react';
import { HeaderProps } from './types';
import './index.scss';
import ExternalLink from '../ExternalLink';
import HeaderLinkIcon from '../../assets/images/header-link-icon.png';

const Header: React.FC<HeaderProps> = ({title, subtitle, links, onClick= () => ''}) => {
    return (
        <div className="cbo-header">
            <div className="row">
                <div className="col cbo-headings">
                    <h1 onClick={onClick} className='cbo-headings-title'>{title}</h1>
                    {subtitle && <h3 className='cbo-headings-subtitle'>{subtitle}</h3>}
                </div>

                {links && (
                    <div className='col cbo-header-links'>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <ExternalLink href={link.url} icon={HeaderLinkIcon}>{link.label}</ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;