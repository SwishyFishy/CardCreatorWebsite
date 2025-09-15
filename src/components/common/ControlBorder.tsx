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
                <label>Border Colour:</label>
                <ColourInput value={data.colour} SetColour={(e: any) => SetData({...data, colour: e.target.value})}/>
            </Control>
            <Control>
                <label>Border Thickness (mm):</label>
                <input type="number" step={.1} value={data.thickness} onChange={(e) => SetData({...data, thickness: e.target.value})}/>
            </Control>
            <Control>
                <label>Border Rounding (%):</label>
                <RangeInput min={0} max={50} step={1} value={data.radius} SetRange={(e: any) => SetData({...data, radius: e.target.value})}/>
            </Control>
            <Control autodisable={data.colour == "Transparent"}>
                <label>Inset (mm):</label>
                <input type="number" value={data.inset} step={.1} onChange={(e) => SetData({...data, inset: e.target.value})}/>
            </Control>
        </div>
    );
}