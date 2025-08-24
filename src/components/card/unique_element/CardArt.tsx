import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import './styles/card_art.css';

export type ArtData = {
    src: string,
    dominance: number,
    fullart: boolean,
    border: number,
    vShift: number,
    hShift: number,
    zoom: number
}

export default function CardArt()
{
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-art-dominance", `calc(${artData.dominance}%)`);
    document.body.style.setProperty("--card-art-fullart", artData.fullart ? `url(${artData.src})` : 'none');
    document.body.style.setProperty("--card-art-horizontal-shift", `${artData.hShift}px`);
    document.body.style.setProperty("--card-art-vertical-shift", `${-artData.vShift}px`);
    document.body.style.setProperty("--card-art-zoom", `${artData.zoom}%`);
    document.body.style.setProperty("--card-art-border-thickness", artData.fullart ? '0' : `${artData.border}mm`);

    return(
        <div id="component-cardart">
            {artData.fullart ? "" : <img src={artData.src}/>}
        </div>
    );
}