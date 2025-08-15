import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

export type FooterData = {
    year?: number,
    set?: string,
    collector?: string,
    artistCredit: string,
    readonly siteCredit: "Designed with CardCreator",
    readonly licence: "CC/BY-SA 4.0"
}

import './styles/card_footer.css';

export default function CardFooter()
{
    const footerData = useContext(CONTEXT_cardData).cardData.footer;

    return(
        <div id="component-cardfooter">
            {Object.entries(footerData).map((entry, index) => (
                <span key={`footer${index}`} className={entry[0]}>{entry[1]}</span>
            ))}
        </div>
    );
}