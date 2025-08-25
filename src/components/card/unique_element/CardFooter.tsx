import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import './styles/card_footer.css';

export type FooterData = {
    year: number,
    set: string,
    collectorNum?: number,
    collectorMax?: number,
    artist: string
}

type FooterDisplay = {
    year: number,
    set: string,
    collector: string,
    artist: string,
    readonly siteCredit: "Designed with CardCreator",
    readonly licence: "CC/BY-SA 4.0"
}

export default function CardFooter()
{
    const footerData = useContext(CONTEXT_cardData).cardData.footer;

    const footerDisplay: FooterDisplay = {
        year: footerData.year,
        set: footerData.set.substring(0, 4).toUpperCase(),
        collector: `${footerData.collectorNum}${footerData.collectorMax ? `/${footerData.collectorMax}` : ""}`,
        artist: footerData.artist,
        siteCredit: "Designed with CardCreator",
        licence: "CC/BY-SA 4.0"
    }

    return(
        <div id="component-cardfooter">
            {Object.entries(footerDisplay).map((entry, index) => (
                <span key={`footer${index}`} className={entry[0]}>{entry[1]}</span>
            ))}
        </div>
    );
}