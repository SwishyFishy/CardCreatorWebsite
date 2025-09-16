import Control from "./Control";
import MultiTextInput from "./MultiTextInput";

import type { CardStats } from "../card/card_types"

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
                <input type="checkbox" checked={detail.separator} onChange={() => ReturnDetail({...detail, separator: !detail.separator})}/>
            </Control>
            <Control>
                <label>Types:</label>
                <MultiTextInput texts={detail.stats} SetTexts={(newStats: string[]) => ReturnDetail({...detail, stats: newStats})}/>
            </Control>
        </div>
    );
}