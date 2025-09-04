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
            <Control>
                <label htmlFor="detail-offsetX">Horizontal Offset (px):</label>
                <input type="number" value={detail.offsetX || 0} step={1} onChange={(e) => SetDetail({...detail, offsetX: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-offsetY">Vertical Offset (px):</label>
                <input type="number" value={detail.offsetY || 0} step={1} onChange={(e) => SetDetail({...detail, offsetY: e.target.value})}/>
            </Control>

            <ControlBackground data={detail} SetData={SetDetail}/>
            <Control>
                <label htmlFor="detail-border-colour">Border Colour:</label>
                <ColourInput id="detail-border-colour" value={detail.borderColour} SetColour={(e: any) => SetDetail({...detail, borderColour: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-border-thickness">Border Thickness (mm):</label>
                <input type="number" id="detail-border-thickness" step={.1} value={detail.borderThickness} onChange={(e) => SetDetail({...detail, borderThickness: e.target.value})}/>
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