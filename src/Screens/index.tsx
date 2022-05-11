import OnboardFirstStep from "./OnboardFirstStep";
import OnboardSecondStep from "./OnboardSecondStep";
import StripeConfig from "./StripeConfig";
import Overview from "./Overview";
import Clients from "./Clients";
import Products from "./Products";
import Invoices from "./Invoices";
import { ScreensPros } from "./types";
import './index.scss';

enum ScreenNames {
    OnboardFirstStep = 'OnboardFirstStep',
    OnboardSecondStep = 'OnboardSecondStep',
    StripeConfig = 'StripeConfig',
    Overview = 'Overview',
    Clients = 'Clients',
    Products = 'Products',
    Invoices = 'Invoices',
}

const components = {
    OnboardFirstStep,
    OnboardSecondStep,
    StripeConfig,
    Overview,
    Clients,
    Products,
    Invoices,
}

const Screens: {
    [k: string]: React.FC<ScreensPros>
} = {...components};

export {ScreenNames}
export default Screens;