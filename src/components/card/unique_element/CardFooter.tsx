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

    // Determine brightness of card border and set footer text colour for best contrast
    const borderData = useContext(CONTEXT_cardData).cardData.border;
    const background = borderData.useGradient ? borderData.gradient : borderData.colour;
    document.body.style.setProperty("--card-footer-text-colour", 
        0.2126 * parseInt(background.substring(1, 3)) + 0.7152 * parseInt(background.substring(3, 5)) + 0.0722 * parseInt(background.substring(5)) < 75 ? 
        "white" : "black"
    );

    return(
        <div id="component-cardfooter">
            {Object.entries(footerDisplay).map((entry, index) => (
                <span key={`footer${index}`} className={entry[0]}>{entry[1]}</span>
            ))}
        </div>
    );
}