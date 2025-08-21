import { useContext } from "react";

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

    // Set CSS variables from card data
    document.body.style.setProperty("--card-art-fullart", cardData.art.fullart ? `url(${cardData.art.src})` : 'none');
    document.body.style.setProperty("--card-art-dominance", `calc(${cardData.art.dominance}% - var(--card-footer-dominance))`);

    return(
        <div id="component-card">
            <CardBorder>
                <div id="card">
                    <div id="card-main">
                        <CardArt/>
                        <CardBody/>
                    </div>
                    <div id="card-details">
                        {cardData.details.map((detail) => (
                            <CardDetailBlock elementSet={detail}/>
                        ))}
                    </div>
                    <CardFooter/>
                </div>
            </CardBorder>
        </div>
    );
}