import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

import Symbol from "../../symbol_library/Symbol";
import type { SymbolData } from "../../symbol_library/Symbol";

import './styles/card_cost.css';

export type CostData = {
    cost: SymbolData[],
    direction: "row" | "column",
    readonly id: "cost"
}

interface props_CardCost {
    alignment: "horizontal" | "vertical-left" | "vertical-right",
    costData: CostData,
    style?: DetailStyleCSS
}

export default function CardCost({alignment, costData, style}: props_CardCost)
{
    const baseId: string = uuid();
    return(
        <div key={baseId} className={`component-cardcost component-carddetail ${costData.direction} ${alignment}`} style={style}>
            {costData.cost.map((symbol, index) => (
                <span key={`${baseId}symbol${index}`}><Symbol symbol={symbol}/></span>
            ))}
        </div>
    );
}