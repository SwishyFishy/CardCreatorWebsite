import type { PropsWithChildren } from "react";

import { useContext } from "react";
import { CONTEXT_cardData } from "../../page/Layout";

import { GradientCSS, type UniversalProperties } from "../card_types";

import './styles/card_border.css';

export type BorderData = {

} & UniversalProperties

export default function CardBorder({children}: PropsWithChildren)
{
    const borderData = useContext(CONTEXT_cardData).cardData.border;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-border-background", GradientCSS(borderData.background).backgroundImage);
    document.body.style.setProperty("--card-border-colour", borderData.border.colour);
    document.body.style.setProperty("--card-border-thickness", `${borderData.border.thickness}mm`);
    document.body.style.setProperty("--card-border-radius", `${borderData.border.radius}%`);
    document.body.style.setProperty("--card-border-inset", `${borderData.border.inset}mm`);

    return(
        <div id="component-cardborder">
            {children}
        </div>
    );
}