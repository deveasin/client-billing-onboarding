import Button from "../../components/Button";
import ConnectedAccountCard from "../../components/ConnectedAccountCard";
import { ButtonCallback } from "./types";
const Connected: React.FC<ButtonCallback> = ({buttonCallback}) => {
    return (
        <>
            <br/>
            <ConnectedAccountCard
                title="{name} Stripe Account"
                email="{email}"
            />
            <br/>
            <Button style={{minWidth: '150px'}} title="Continue" onClick={buttonCallback} />
        </>
    )
}

export default Connected;