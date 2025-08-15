import type { PropsWithChildren } from "react";

import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import './styles/card_border.css';

export type BorderData = {
    colour: string
}

export default function CardBorder({children}: PropsWithChildren)
{
    const borderData = useContext(CONTEXT_cardData).cardData.border;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-border-colour", borderData.colour);

    return(
        <div id="component-cardborder">
            {children}
        </div>
    );
}