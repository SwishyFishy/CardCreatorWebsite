import Control from "./Control";
import CardCost from "../card/duplicable_element/CardCost";
import SymbolLibrary from "../symbol_library/SymbolLibrary";

import type { CardCost as Cost} from "../card/card_types";
import type { SymbolData } from "../symbol_library/Symbol";

interface props_ControlDetailCost{
    detail: Cost
    ReturnDetail: Function
}

export default function ControlDetailCost({detail, ReturnDetail}: props_ControlDetailCost) 
{
    return(
        <div className="component-controldetailcost">
            <Control>
                <label>Cost:</label>
                <div>
                    <CardCost vertical={detail.direction == "column"} costData={detail}/>
                    <SymbolLibrary InsertSymbol={(e: any, symbol: SymbolData) => {
                        e.preventDefault();
                        ReturnDetail({...detail, cost: [...detail.cost, symbol]});
                    }}/>
                </div>
            </Control>
            <Control>
                <label>Direction:</label>
                <select value={detail.direction} onChange={(e) => ReturnDetail({...detail, direction: e.target.value})}>
                    <option value="row">Horizontal</option>
                    <option value="column">Vertical</option>
                </select>
            </Control>
        </div>
    );
}