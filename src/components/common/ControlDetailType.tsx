import Control from "./Control";
import MultiTextInput from "./MultiTextInput";

import type { CardType } from "../card/card_types"

interface props_ControlDetailType {
    detail: CardType,
    ReturnDetail: Function
}

export default function ControlDetailType({detail, ReturnDetail}: props_ControlDetailType)
{
    return(
        <div className="component-controldetailtype">
            <Control>
                <label>Types:</label>
                <MultiTextInput texts={detail.types} SetTexts={(newTypes: string[]) => ReturnDetail({...detail, types: newTypes})}/>
            </Control>
        </div>
    );
}