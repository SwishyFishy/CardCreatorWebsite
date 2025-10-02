import Control from "./Control";
import ControlUniversalProperties from "./ControlUniversalProperties";
import ColourInput from "./ColourInput";

import type { Gradient, Border } from "../card/card_types";
import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";

interface props_ControlDetails {
    detail: DetailStyleData,
    SetDetail: Function,
    verticalTextMatters: boolean
}

export default function ControlDetails({detail, SetDetail, verticalTextMatters}: props_ControlDetails)
{
    return(
        <div className="component-controldetails">
            <Control>
                <label>Horizontal Offset (px):</label>
                <input type="number" value={detail.offsetX || 0} step={1} onChange={(e) => SetDetail({...detail, offsetX: e.target.value})}/>
            </Control>
            <Control>
                <label>Vertical Offset (px):</label>
                <input type="number" value={detail.offsetY || 0} step={1} onChange={(e) => SetDetail({...detail, offsetY: e.target.value})}/>
            </Control>

            <ControlUniversalProperties data={{background: detail.background, border: detail.border}} SetData={(newBG: Gradient, newBorder: Border) => SetDetail({...detail, background: newBG, border: newBorder})}/>

            <Control>
                <label>Text Colour:</label>
                <ColourInput value={detail.textColour} SetColour={(e: any) => SetDetail({...detail, textColour: e.target.value})}/>
            </Control>
            <Control autodisable={!verticalTextMatters}>
                <label>Vertical Text Direction:</label>
                <select value={detail.verticalText} onChange={(e) => SetDetail({...detail, verticalText: e.target.value})}>
                    <option value="up">Up</option>
                    <option value="down">Down</option>
                </select>
            </Control>
        </div>
    );
}