import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import './styles/card_art.css';

export type ArtData = {
    src: string,
    dominance: number | "full",
    vShift: number,
    hShift: number,
    zoom: number
}

export default function CardArt()
{
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;

    return(
        <div id="component-cardart">
            <img src={artData.src} style={{transform: `translate(${artData.hShift}px, ${-artData.vShift}px) scale(${artData.zoom / 100})`}}/>
        </div>
    );
}