import Control from "./Control";
import ControlUniversalProperties from "./ControlUniversalProperties";
import ColourInput from "./ColourInput";
import RangeInput from "./RangeInput";

import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";

interface props_ControlDetails {
    detail: DetailStyleData,
    SetDetail: Function
}

export default function ControlDetails({detail, SetDetail}: props_ControlDetails)
{
    return(
        <div className="component-controldetails">
            <Control>
                <label htmlFor="detail-offsetX">Horizontal Offset (px):</label>
                <input type="number" value={detail.offsetX || 0} step={1} onChange={(e) => SetDetail({...detail, offsetX: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-offsetY">Vertical Offset (px):</label>
                <input type="number" value={detail.offsetY || 0} step={1} onChange={(e) => SetDetail({...detail, offsetY: e.target.value})}/>
            </Control>

            <ControlUniversalProperties data={{background: detail.background, border: detail.border}} SetData={SetDetail}/>
            
            <Control>
                <label htmlFor="detail-text-colour">Text Colour:</label>
                <ColourInput id="detail-text-colour" value={detail.textColour} SetColour={(e: any) => SetDetail({...detail, textColour: e.target.value})}/>
            </Control>
        </div>
    );
}