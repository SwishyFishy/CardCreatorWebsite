import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import './styles/card_art.css';

export type ArtData = {
    src: string,
    dominance: number | "full",
    hShift: number,
    vShift: number,
    zoom: number
}

export default function CardArt()
{
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;

    return(
        <div id="component-cardart">
            <img src={artData.src}/>
        </div>
    );
}