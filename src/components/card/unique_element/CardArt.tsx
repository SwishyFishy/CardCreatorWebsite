import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import type { CardCore, UniversalProperties } from "../card_types";

import './styles/card_art.css';

export type ArtData = {
    src: string,
    dominance: number,
    fullart: boolean,
    gap: number,
    vShift: number,
    hShift: number,
    zoom: number
} & UniversalProperties

export default function CardArt()
{
    const coreData: CardCore = useContext(CONTEXT_cardData).cardData.card;
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-art-dominance", `calc(${Math.max((artData.dominance / 100) * coreData.height - 1/2, 0)}mm`);
    document.body.style.setProperty("--card-art-fullart", artData.fullart ? `url(${artData.src})` : 'none');
    document.body.style.setProperty("--card-art-horizontal-shift", `${artData.hShift}px`);
    document.body.style.setProperty("--card-art-vertical-shift", `${-artData.vShift}px`);
    document.body.style.setProperty("--card-art-zoom", `${artData.zoom}%`);
    document.body.style.setProperty("--card-art-gap-thickness", `${artData.gap}mm`);

    return(
        <div id="component-cardart" className={artData.fullart ? 'fullart' : ""}>
            {artData.fullart ? "" : <img src={artData.src}/>}
        </div>
    );
}