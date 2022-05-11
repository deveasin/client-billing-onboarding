import usersIcon from '../../assets/images/users-icon.png';
import copyIcon from '../../assets/images/copy-icon.png';
import invoiceIcon from '../../assets/images/invoice-icon.png';
import settingsIcon from '../../assets/images/settings-icon.png';
import Button from '../Button';
import './index.scss';
import { NavBarProps } from './types';
import { MenuConstant } from './types';
const NavBar: React.FC<NavBarProps> = ({activeMenu, setScreen}) => {

    const menus = [
        {
            label: "Overview",
            href: "#",
            active: MenuConstant.OVERVIEW,
            screen: "Overview"
        },
        {
            label: "Clients",
            href: "#",
            icon: usersIcon,
            active: MenuConstant.CLIENTS,
            screen: "Clients"
        },
        {
            label: "Products & Services",
            href: "#",
            icon: copyIcon,
            active: MenuConstant.PRODUCTS,
            screen: "Products"
        },
        {
            label: "Invoices",
            href: "#",
            icon: invoiceIcon,
            active: MenuConstant.INVOICES,
            screen: "Invoices"
        },
    ]

    const handleClick = (screen: string) => {
        if(setScreen) {
            setScreen(screen);
        }
    }

    return (
        <div className="cbo-nav-bar">
            <ul className="cbo-menu">
                {menus.map((menu, index) => (
                    <li key={index} >
                        <a  className={activeMenu === menu.active ? 'active' : ''} href={menu.href} onClick={(e) => {
                            e.preventDefault();
                            handleClick(menu.screen)
                        }}>
                            { ('icon' in menu) ? <img src={menu.icon} alt="Nav Item Icon" /> : '' }
                            {menu.label}
                        </a>
                    </li>
                ))}
            </ul>

            <Button title="Configure" className={`cbo-config-btn ${activeMenu === MenuConstant.CONFIGURE ? 'active' : ''}`} icon={settingsIcon}  onClick={() => {
                handleClick("StripeConfig");
            }} />
        </div>
    )
}

export default NavBar;