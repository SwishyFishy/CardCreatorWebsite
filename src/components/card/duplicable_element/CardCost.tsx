import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

import Symbol from "../../symbol_library/Symbol";
import type { SymbolData } from "../../symbol_library/Symbol";

import './styles/card_cost.css';

export type CostData = {
    cost: SymbolData[],
    direction: "row" | "column",
    readonly id?: "cost"
}

interface props_CardCost {
    costData: CostData,
    style?: DetailStyleCSS
}

export default function CardCost({costData, style}: props_CardCost)
{
    const baseId: string = uuid();
    return(
        <div key={baseId} className={`component-cardcost component-carddetail ${costData.direction}`} style={style}>
            {costData.cost.map((symbol, index) => (
                <span key={`${baseId}${index}`}><Symbol symbol={symbol}/></span>
            ))}
        </div>
    );
}