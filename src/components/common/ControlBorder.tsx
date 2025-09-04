import Control from "./Control";
import ColourInput from "./ColourInput";
import RangeInput from "./RangeInput";

import type { Border } from "../card/card_types";

interface props_ControlBorder {
    data: Border,
    SetData: Function
}

export default function ControlBorder({data, SetData}: props_ControlBorder)
{ 
    return(
        <div className="component-controlborder">
            <Control>
                <label htmlFor="detail-border-colour">Border Colour:</label>
                <ColourInput id="detail-border-colour" value={data.colour} SetColour={(e: any) => SetData({...data, colour: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-border-thickness">Border Thickness (mm):</label>
                <input type="number" id="detail-border-thickness" step={.1} value={data.thickness} onChange={(e) => SetData({...data, thickness: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-border-radius">Border Rounding (%):</label>
                <RangeInput id="detail-border-radius" min={0} max={50} step={1} value={data.radius} SetRange={(e: any) => SetData({...data, radius: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="detail-inset">Inset (mm):</label>
                <input type="number" value={data.inset} step={.1} onChange={(e) => SetData({...data, inset: e.target.value})}/>
            </Control>
        </div>
    );
}