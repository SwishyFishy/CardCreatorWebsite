import {v4 as uuid} from 'uuid';

import CardDetail from './CardDetail';
import type { TitleData } from './CardTitle';
import type { CostData } from './CardCost';
import type { TypeData } from './CardType';
import type { StatsData } from './CardStats';

import './styles/card_detail_block.css';

export type DetailStyleData = {
    colour: string,
    gradient: string,
    useGradient: boolean,
    border: string
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
    border?: string
}

interface props_CardDetailBlock {
    details: DetailGroupData
}

export default function CardDetailBlock({details}: props_CardDetailBlock)
{
    const baseId: string = uuid();

    // Style conversion and error checking
    let style: DetailStyleCSS | DetailStyleCSS[] = {};
    if (details.elementStyles.group)
    {
        if (Array.isArray(details.elementStyles.style))
        {
            console.error(`Grouped card details have conflicting styles - dump ${details}`);
        }
        else
        {
            style = {
                backgroundImage: `linear-gradient(135deg, ${details.elementStyles.style.colour}, ${details.elementStyles.style.useGradient ? details.elementStyles.style.gradient : details.elementStyles.style.colour})`,
                color: details.elementStyles.style.textColour,
                border: `.1em solid ${details.elementStyles.style.border}`
            }
        }
    }
    else
    {
        if (!Array.isArray(details.elementStyles.style) || details.elementStyles.style.length != details.elementSet.elements.length)
        {
            console.error(`Incompatible card details and card detail styles - dump ${details}`);
        }
    }

    return(
        <div key={baseId} className={`component-carddetailblock ${details.elementSet.align} ${details.elementSet.justify}`} style={style}>
            {details.elementSet.elements.map((element, index) => (
                <span key={`${baseId}element${index}`}>
                    <CardDetail elementProps={element} elementStyle={details.elementStyles.group ? {} : {
                        backgroundImage: `linear-gradient(135deg, ${(details.elementStyles.style as DetailStyleData[])[index].colour}, ${(details.elementStyles.style as DetailStyleData[])[index].useGradient ? (details.elementStyles.style as DetailStyleData[])[index].gradient : (details.elementStyles.style as DetailStyleData[])[index].colour})`,
                        color: (details.elementStyles.style as DetailStyleData[])[index].textColour,
                        border: `.1em solid ${(details.elementStyles.style as DetailStyleData[])[index].border}`
                    }}/>
                </span>
            ))}
        </div>
    );
}