import {v4 as uuid} from 'uuid';

import CardDetail from './CardDetail';

import type { TitleData } from './CardTitle';
import type { CostData } from './CardCost';
import type { TypeData } from './CardType';
import type { StatsData } from './CardStats';
import type { Gradient } from '../card_types';

import { GradientCSS } from '../card_types';

import './styles/card_detail_block.css';

export type DetailStyleData = {
    background: Gradient,
    borderColour: string,
    borderThickness: number,
    borderRounding: number,
    inset: number,
    textColour: string
}

export type DetailGroupData = {
    name: string
    elements: (TitleData | CostData | TypeData | StatsData)[],
    align: "horizontal" | "vertical-left" | "vertical-right",
    justify: "first" | "middle" | "last",
    position: "start" | "center" | "spread" | "end",
    groupStyle: DetailStyleData,
    elementStyles: DetailStyleData[]
}

export type DetailStyleCSS = {
    backgroundImage?: string, 
    color?: string,
    boxShadow?: string,
    outline?: string,
    borderRadius?: string
}

interface props_CardDetailBlock {
    details: DetailGroupData
}

export default function CardDetailBlock({details}: props_CardDetailBlock)
{
    const baseId: string = uuid();

    // Style conversion and error checking
    const groupStyle: DetailStyleData | undefined = details.groupStyle;
    const groupCSS: DetailStyleCSS = {
        backgroundImage: GradientCSS(groupStyle.background),
        color: groupStyle.textColour,
        boxShadow: `inset ${groupStyle.inset}mm ${groupStyle.inset}mm ${groupStyle.inset}mm black, inset ${-groupStyle.inset}mm ${-groupStyle.inset}mm ${groupStyle.inset}mm black`,
        outline: `${groupStyle.borderThickness}mm solid ${groupStyle.borderColour}`,
        borderRadius: `${groupStyle.borderRounding}%`
    };

    const elementStyle: DetailStyleData[] | undefined = details.elementStyles;
    const elementCSS: DetailStyleCSS[] = elementStyle.map((style) => ({
        backgroundImage: GradientCSS(style.background),
        color: style.textColour,
        boxShadow: `inset ${style.inset}mm ${style.inset}mm ${style.inset}mm ${style.borderColour}, inset ${-style.inset}mm ${-style.inset}mm ${style.inset}mm ${style.borderColour}`,
        outline: `${style.borderThickness}mm solid ${style.borderColour}`,
        borderRadius: `${style.borderRounding}%`
    }));

    return(
        <div key={baseId} className={`component-carddetailblock ${details.align} ${details.justify} ${details.position}`} style={groupCSS}>
            {details.elements.map((element, index) => (
                <span key={`${baseId}element${index}`}>
                    <CardDetail vertical={!(details.align == "horizontal")} elementProps={element} elementStyle={elementCSS[index]}/>
                </span>
            ))}
        </div>
    );
}