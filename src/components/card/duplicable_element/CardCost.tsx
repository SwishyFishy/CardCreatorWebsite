import type { SymbolData } from "../../symbol_library/Symbol";

export type CostData = {
    cost: SymbolData[],
    readonly id?: "cost"
}

export default function CardCost({cost}: CostData)
{
    return(
        <div className="component-cardcost">
            
        </div>
    );
}