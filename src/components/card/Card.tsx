import { useEffect, useRef, useContext } from "react";

import CardBorder from "./unique_element/CardBorder";
import CardArt from "./unique_element/CardArt";
import CardBody from "./unique_element/CardBody";
import CardFooter from "./unique_element/CardFooter";

import { CONTEXT_cardData } from "../page/Layout";
import type { CardData } from "./card_types";

import './styles/card.css';
import CardDetailBlock from "./duplicable_element/CardDetailBlock";

export default function Card()
{
    const cardData: CardData = useContext(CONTEXT_cardData).cardData;
    const ref: React.RefObject<HTMLDivElement | null> = useRef(null);

    // Set the content height dynamically based ont he final calculated height of the card
    // Must be done this way because the height of the card is unknown until after the --card-view-scale is applied
    useEffect(() => {
        if (ref)
        {
            document.body.style.setProperty("--card-content-height", `calc(${ref.current!.clientHeight}px - var(--card-footer-dominance))`)
        }
    }, [ref.current?.clientHeight]);

    // Set CSS properties from card data
    document.body.style.setProperty("--card-height", `${cardData.card.height}mm`);
    document.body.style.setProperty("--card-width", `${cardData.card.width}mm`);
    document.body.style.setProperty("--card-view-scale", `${2 * 63 / cardData.card.width}`);

    return(
        <div id="component-card">
            <CardBorder>
                <div id="card" ref={ref}>
                    <div id="card-main">
                        <CardArt/>
                        <CardBody/>
                    </div>
                    <div id="card-details">
                        {Object.values(cardData.details).map((detail) => (
                            <CardDetailBlock details={detail}/>
                        ))}
                    </div>
                    <CardFooter/>
                </div>
            </CardBorder>
        </div>
    );
}