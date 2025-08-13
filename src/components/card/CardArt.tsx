import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { CardData } from "./card_types";

import './styles/card_art.css';

export type ArtData = {
    src: string,
    dominance: number,
    fullart: boolean,
    vShift: number,
    hShift: number,
    zoom: number
}

export default function CardArt()
{
    const cardData: CardData = useContext(CONTEXT_cardData).cardData;
    const artData: ArtData = cardData.art;

    return(
        <div id="component-cardart" style={{borderBottom: `1em solid ${cardData.border.colour}`}}>
            <img src={artData.src} style={{transform: `translate(${artData.hShift}px, ${-artData.vShift}px) scale(${artData.zoom / 100})`}}/>
        </div>
    );
}