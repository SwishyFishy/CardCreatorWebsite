import {v4 as uuid} from 'uuid';

import Symbol from "../../symbol_library/Symbol";
import type { SymbolData } from "../../symbol_library/Symbol";

import './styles/card_cost.css';

export type CostData = {
    cost: SymbolData[],
    direction: "row" | "column",
    readonly id?: "cost"
}

export default function CardCost({cost, direction}: CostData)
{
    const baseId: string = uuid();
    return(
        <div key={baseId} className={`component-cardcost ${direction}`}>
            {cost.map((symbol, index) => (
                <span key={`${baseId}${index}`}><Symbol symbol={symbol}/></span>
            ))}
        </div>
    );
}