import Control from "./Control";
import ControlBackground from "./ControlBackground";
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
            <ControlBackground data={detail} SetData={SetDetail}/>
            <Control>
                <label htmlFor="detail-border">Border Colour:</label>
                <ColourInput id="detail-border" value={detail.border} SetColour={(e: any) => SetDetail({...detail, border: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-border-radius">Border Rounding (%):</label>
                <RangeInput id="detail-border-radius" min={0} max={50} step={1} value={detail.borderRounding} SetRange={(e: any) => SetDetail({...detail, borderRounding: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-inset">Inset (mm):</label>
                <input type="number" value={detail.inset} step={.1} onChange={(e) => SetDetail({...detail, inset: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-text-colour">Text Colour:</label>
                <ColourInput id="detail-text-colour" value={detail.textColour} SetColour={(e: any) => SetDetail({...detail, textColour: e.target.value})}/>
            </Control>
        </div>
    );
}