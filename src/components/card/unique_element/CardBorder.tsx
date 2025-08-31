import type { PropsWithChildren } from "react";

import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import { type Gradient, GradientCSS } from "../card_types";

import './styles/card_border.css';

export type BorderData = {
    background: Gradient,
    thickness: number,
    rounding: number
}

export default function CardBorder({children}: PropsWithChildren)
{
    const borderData = useContext(CONTEXT_cardData).cardData.border;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-border-background", GradientCSS(borderData.background));
    document.body.style.setProperty("--card-border-thickness", `${borderData.thickness}mm`);
    document.body.style.setProperty("--card-border-radius", `${borderData.rounding}mm`)

    return(
        <div id="component-cardborder">
            {children}
        </div>
    );
}