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

    // Set CSS variables from card data
    document.body.style.setProperty("--card-art-horizontal-shift", `${artData.hShift}px`);
    document.body.style.setProperty("--card-art-vertical-shift", `${-artData.vShift}px`);
    document.body.style.setProperty("--card-art-zoom", `${artData.zoom / 100}`);

    return(
        <div id="component-cardart">
            <img src={artData.src}/>
        </div>
    );
}