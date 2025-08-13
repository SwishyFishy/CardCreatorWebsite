import { useContext } from "react";

import CardBorder from "./CardBorder";
import CardTitle from "./CardTitle";
import CardCost from "./CardCost";
import CardArt from "./CardArt";
import CardType from "./CardType";
import CardBody from "./CardBody";
import CardStats from "./CardStats";
import CardFooter from "./CardFooter";

import { CONTEXT_cardData } from "../page/Layout";
import type { CardData } from "./card_types";

import './styles/card.css';

export default function Card()
{
    const cardData: CardData = useContext(CONTEXT_cardData).cardData;
    console.log(cardData);

    return(
        <div id="component-card">
            <CardBorder>
                <div id="card">
                    <div id="card-main">
                        <CardArt/>
                        <CardBody/>
                    </div>
                    <div id="card-details">
                        <CardTitle/>
                        <CardCost/>
                        <CardType/>
                        <CardStats/>
                    </div>
                    <CardFooter/>
                </div>
            </CardBorder>
        </div>
    );
}