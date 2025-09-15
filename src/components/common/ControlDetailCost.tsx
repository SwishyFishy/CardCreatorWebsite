import Control from "./Control";
import SymbolLibrary from "../symbol_library/SymbolLibrary";

import type { CardCost } from "../card/card_types";

interface props_ControlDetailCost{
    detail: CardCost
    ReturnDetail: Function
}

export default function ControlDetailCost({detail, ReturnDetail}: props_ControlDetailCost) 
{
    return(
        <div className="component-controldetailcost">
            <Control>
                <label>Cost:</label>
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