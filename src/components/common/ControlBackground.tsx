import {v4 as uuid} from 'uuid';

import Control from "./Control";
import ColourInput from "./ColourInput";

import type { CardBorder, CardBody } from "../card/card_types";
import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";

import './styles/control_background.css';

interface props_ControlBackground {
    data: CardBorder | CardBody | DetailStyleData,
    SetData: Function
}

export default function ControlBackground({data, SetData}: props_ControlBackground)
{
    const baseId: string = uuid();

    return(
        <div className="component-controlbackground">   
            <Control>
                <label htmlFor={`${baseId}-bg-colour`}>Colour:</label>
                <ColourInput id={`${baseId}-bg-colour`} value={data.background.colour} SetColour={(e: any) => SetData({...data, background: {...data.background, colour: e.target.value}})}/>    
            </Control>
            <Control>
                <label htmlFor={`${baseId}-bg-add`}>Gradient:</label>
                <input type="button" id={`${baseId}-bg-add`} value="Add Gradient" onClick={() => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(data.background.gradient.length, 0, "#ffffff")}})}/>
            </Control>
            <ul>
                {data.background.gradient.map((gradient, index) => (
                    <li key={index} className="gradient-selector">
                        <Control key={`${index}control`} deletable={{Delete: () => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1)}})}}>
                            <label key={`${index}label`} htmlFor={`border-gradient-${index}`}>Gradient {index}:</label>
                            <ColourInput key={`${index}colour`} id={`border-gradient-${index}`} value={gradient} SetColour={(e: any) => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1, e.target.value)}})}/>
                        </Control>
                    </li>
                ))}
                <li className={data.background.gradient.length > 0 ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-type`}>Gradient Type:</label>
                        <select id={`${baseId}-bg-gradient-type`} value={data.background.linear ? "linear" : "radial"} onChange={(e: any) => SetData({...data, background: {...data.background, linear: e.target.value == "linear" ? true : false}})}>
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                        </select>
                    </Control>
                </li>
                <li className={data.background.gradient.length > 0 && data.background.linear ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-angle`}>Gradient Angle:</label>
                        <input type="number" id={`${baseId}-bg-gradient-angle`} value={data.background.angle} onChange={(e: any) => SetData({...data, background: {...data.background, angle: e.target.value}})}/>
                    </Control>
                </li>
            </ul>
        </div>
    );
}