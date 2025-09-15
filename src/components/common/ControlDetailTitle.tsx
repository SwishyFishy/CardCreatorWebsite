import Control from "./Control";

import type { CardTitle } from "../card/card_types";

interface props_ControlDetailTitle{
    detail: CardTitle
    ReturnDetail: Function
}

export default function ControlDetailTitle({detail, ReturnDetail}: props_ControlDetailTitle) 
{
    return(
        <Control>
            <label>Title:</label>
            <input type="text" value={detail.title} onChange={(e) => ReturnDetail({title: e.target.value})}/>
        </Control>
    );
}