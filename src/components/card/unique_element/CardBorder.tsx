import type { PropsWithChildren } from "react";

import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import './styles/card_border.css';

export type BorderData = {
    colour: string,
    gradient: string,
    useGradient: boolean,
    thickness: number
}

export default function CardBorder({children}: PropsWithChildren)
{
    const borderData = useContext(CONTEXT_cardData).cardData.border;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-border-colour", borderData.colour);
    document.body.style.setProperty("--card-border-gradient", borderData.useGradient ? borderData.gradient : borderData.colour);
    document.body.style.setProperty("--card-border-thickness", `${borderData.thickness}mm`);

    return(
        <div id="component-cardborder">
            {children}
        </div>
    );
}