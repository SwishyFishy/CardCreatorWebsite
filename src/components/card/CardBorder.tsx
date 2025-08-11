import type { PropsWithChildren } from "react";

import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import './styles/card_border.css';

export type BorderData = {
    colour: string
}

export default function CardBorder({children}: PropsWithChildren)
{
    const borderData = useContext(CONTEXT_cardData).cardData.border;

    return(
        <div id="component-cardborder" style={{borderColor: borderData.colour}}>
            {children}
        </div>
    );
}