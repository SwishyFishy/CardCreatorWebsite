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

    return(
        <div id="component-card">
            <CardBorder>
                <div id="card">
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