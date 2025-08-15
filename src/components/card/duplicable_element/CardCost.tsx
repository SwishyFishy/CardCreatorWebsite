import {v4 as uuid} from 'uuid';

import Symbol from "../../symbol_library/Symbol";
import type { SymbolData } from "../../symbol_library/Symbol";

export type CostData = {
    cost: SymbolData[],
    readonly id?: "cost"
}

export default function CardCost({cost}: CostData)
{
    const baseId: string = uuid();
    return(
        <div key={baseId} className="component-cardcost">
            {cost.map((symbol, index) => (
                <span key={`${baseId}${index}`}><Symbol symbol={symbol}/></span>
            ))}
        </div>
    );
}