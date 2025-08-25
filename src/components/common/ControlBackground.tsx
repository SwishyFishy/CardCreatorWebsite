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
    return(
        <div className="component-controlbackground">   
            <Control>
                <label htmlFor="border-colour">Colour:</label>
                <ColourInput id="border-colour" value={data.background.colour} SetColour={(e: any) => SetData({...data, background: {...data.background, colour: e.target.value}})}/>    
            </Control>
            <Control>
                <label htmlFor="border-gradient-add">Gradient:</label>
                <input type="button" id="border-gradient-add" value="Add Gradient" onClick={() => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(data.background.gradient.length, 0, "#ffffff")}})}/>
            </Control>
            <ul>
                {data.background.gradient.map((gradient, index) => (
                    <li key={index} className="gradient-selector">
                        <Control key={`${index}control`}>
                            <label key={`${index}label`} htmlFor={`border-gradient-${index}`}>Gradient {index}:</label>
                            <ColourInput key={`${index}colour`} id={`border-gradient-${index}`} value={gradient} SetColour={(e: any) => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1, e.target.value)}})}/>
                        </Control>
                        <input key={`${index}remove`} className="delete" type="button" value="X" onClick={() => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1)}})}/>
                    </li>
                ))}
                <li className={data.background.gradient.length > 0 ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor="border-gradient-type">Gradient Type:</label>
                        <select id="border-gradient-type" value={data.background.linear ? "linear" : "radial"} onChange={(e: any) => SetData({...data, background: {...data.background, linear: e.target.value == "linear" ? true : false}})}>
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                        </select>
                    </Control>
                </li>
                <li className={data.background.gradient.length > 0 && data.background.linear ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor="border-gradient-angle">Gradient Angle:</label>
                        <input type="number" value={data.background.angle} onChange={(e: any) => SetData({...data, background: {...data.background, angle: e.target.value}})}/>
                    </Control>
                </li>
            </ul>
        </div>
    );
}