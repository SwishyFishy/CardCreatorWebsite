import Control from "./Control";
import ControlBackground from "./ControlBackground";

import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";

interface props_ControlDetails {
    detail: DetailStyleData,
    SetDetail: Function
}

export default function ControlDetails({detail, SetDetail}: props_ControlDetails)
{
    return(
        <div className="component-controldetails">
            
        </div>
    );
}