import {v4 as uuid} from 'uuid';

import CardDetail from './CardDetail';

import type { TitleData } from './CardTitle';
import type { CostData } from './CardCost';
import type { TypeData } from './CardType';
import type { StatsData } from './CardStats';
import type { UniversalProperties } from '../card_types';

import { GradientCSS } from '../card_types';

import './styles/card_detail_block.css';

export type DetailStyleData = {
    textColour: string,
    offsetX?: number,
    offsetY?: number
} & UniversalProperties

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
    borderRadius?: string,
    transform?: string
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
        boxShadow: `inset ${groupStyle.border.inset}mm ${groupStyle.border.inset}mm ${groupStyle.border.inset}mm black, inset ${-groupStyle.border.inset}mm ${-groupStyle.border.inset}mm ${groupStyle.border.inset}mm black`,
        outline: `${groupStyle.border.thickness}mm solid ${groupStyle.border.colour}`,
        borderRadius: `${groupStyle.border.radius}%`,
        transform: groupStyle.offsetX || groupStyle.offsetY ? `translate(${groupStyle.offsetX || 0}px, ${(groupStyle.offsetY || 0) * -1}px)` : ""
    };

    const elementStyle: DetailStyleData[] | undefined = details.elementStyles;
    const elementCSS: DetailStyleCSS[] = elementStyle.map((style) => ({
        backgroundImage: GradientCSS(style.background),
        color: style.textColour,
        boxShadow: `inset ${style.border.inset}mm ${style.border.inset}mm ${style.border.inset}mm ${style.border.colour}, inset ${-style.border.inset}mm ${-style.border.inset}mm ${style.border.inset}mm ${style.border.colour}`,
        outline: `${style.border.thickness}mm solid ${style.border.colour}`,
        borderRadius: `${style.border.radius}%`,
        transform: style.offsetX || style.offsetY ? `translate(${style.offsetX || 0}px, ${(style.offsetY || 0) * -1}px)` : ""
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