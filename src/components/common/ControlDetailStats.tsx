import Control from "./Control";
import MultiTextInput from "./MultiTextInput";

import { Character, type CardStats } from "../card/card_types"

interface props_ControlDetailStats{
    detail: CardStats,
    ReturnDetail: Function
}

export default function ControlDetailStats({detail, ReturnDetail}: props_ControlDetailStats)
{
    return(
        <div className="component-controldetailstats">
            <Control>
                <label>Separator:</label>
                <input type="text" value={detail.separator.value} onChange={(e) => ReturnDetail({...detail, separator: new Character(e.target.value.charAt(e.target.value.length - 1))})}/>
            </Control>
            <Control>
                <label>Stats:</label>
                <MultiTextInput texts={detail.stats} SetTexts={(newStats: string[]) => ReturnDetail({...detail, stats: newStats})}/>
            </Control>
        </div>
    );
}