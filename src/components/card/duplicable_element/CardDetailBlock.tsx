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
    elementSet: {   
        elements: (TitleData | CostData | TypeData | StatsData)[],
        align: "horizontal" | "vertical-left" | "vertical-right",
        justify: "first" | "middle" | "last"
    },
    elementStyles: {
        group: boolean,
        style: DetailStyleData | DetailStyleData[]
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
    let style: DetailStyleCSS | DetailStyleCSS[] = {};
    let uStyle: DetailStyleData | DetailStyleData[] = details.elementStyles.style;

    if (details.elementStyles.group)
    {
        if (Array.isArray(uStyle))
        {
            console.error(`Grouped card details have conflicting styles`);
        }
        else
        {
            style = {
                backgroundImage: GradientCSS(uStyle.background),
                color: uStyle.textColour,
                boxShadow: `inset ${uStyle.inset}em ${uStyle.inset}em ${uStyle.inset}em black, inset ${-uStyle.inset}em ${-uStyle.inset}em ${uStyle.inset}em black`,
                outline: `.1em solid ${uStyle.border}`,
                borderRadius: `${uStyle.borderRounding}%`
            }
        }
    }
    else
    {
        if (!Array.isArray(uStyle) || uStyle.length != details.elementSet.elements.length)
        {
            console.error(`Incompatible card details and card detail styles`);
        }
    }

    return(
        <div key={baseId} className={`component-carddetailblock ${details.elementSet.align} ${details.elementSet.justify}`} style={style}>
            {details.elementSet.elements.map((element, index) => (
                <span key={`${baseId}element${index}`}>
                    <CardDetail vertical={!(details.elementSet.align == "horizontal")} elementProps={element} elementStyle={details.elementStyles.group ? {} : Array.isArray(uStyle) ? {
                        backgroundImage: GradientCSS(uStyle[index].background),
                        color: uStyle[index].textColour,
                        boxShadow: `inset ${uStyle[index].inset}em ${uStyle[index].inset}em ${uStyle[index].inset}em black, inset ${-uStyle[index].inset}em ${-uStyle[index].inset}em ${uStyle[index].inset}em black`,
                        outline: `.1em solid ${uStyle[index].border}`,
                        borderRadius: `${uStyle[index].borderRounding}%`
                    } : {}}/>
                </span>
            ))}
        </div>
    );
}