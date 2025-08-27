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
    border: string,
    borderRounding: number,
    inset: number,
    textColour: string
}

export type DetailGroupData = {
    name: string
    elementSet: {   
        elements: (TitleData | CostData | TypeData | StatsData)[],
        align: "horizontal" | "vertical-left" | "vertical-right",
        justify: "first" | "middle" | "last",
        style?: DetailStyleData
    },
    elementStyles: {
        group: boolean,
        style: DetailStyleData[]
    }
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
    const groupStyle: DetailStyleData | undefined = details.elementSet.style;
    const groupCSS: DetailStyleCSS = groupStyle ? {
        backgroundImage: GradientCSS(groupStyle.background),
        color: groupStyle.textColour,
        boxShadow: `inset ${groupStyle.inset}em ${groupStyle.inset}em ${groupStyle.inset}em black, inset ${-groupStyle.inset}em ${-groupStyle.inset}em ${groupStyle.inset}em black`,
        outline: `.1em solid ${groupStyle.border}`,
        borderRadius: `${groupStyle.borderRounding}%`
    } : {};

    const elementStyle: DetailStyleData[] = details.elementStyles.style;
    const elementCSS: DetailStyleCSS[] = elementStyle.map((style) => ({
        backgroundImage: GradientCSS(style.background),
        color: style.textColour,
        boxShadow: `inset ${style.inset}em ${style.inset}em ${style.inset}em black, inset ${-style.inset}em ${-style.inset}em ${style.inset}em black`,
        outline: `.1em solid ${style.border}`,
        borderRadius: `${style.borderRounding}%`
    }));

    return(
        <div key={baseId} className={`component-carddetailblock ${details.elementSet.align} ${details.elementSet.justify}`} style={groupCSS}>
            {details.elementSet.elements.map((element, index) => (
                <span key={`${baseId}element${index}`}>
                    <CardDetail vertical={!(details.elementSet.align == "horizontal")} elementProps={element} elementStyle={elementCSS[index]}/>
                </span>
            ))}
        </div>
    );
}