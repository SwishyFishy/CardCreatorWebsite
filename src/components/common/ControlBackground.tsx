import Control from "./Control";
import ColourInput from "./ColourInput";
import RangeInput from './RangeInput';

import type { Gradient } from '../card/card_types';

import './styles/control_background.css';

interface props_ControlBackground {
    data: Gradient,
    SetData: Function
}

export default function ControlBackground({data, SetData}: props_ControlBackground)
{
    return(
        <div className="component-controlbackground">   
            <Control>
                <label>Colour:</label>
                <ColourInput value={data.colour} SetColour={(e: any) => SetData({...data, colour: e.target.value})}/>    
            </Control>
            <Control>
                <label>Gradient:</label>
                <input type="button" value="Add Gradient" onClick={() => SetData({...data, gradient: data.gradient.toSpliced(data.gradient.length, 0, "#ffffff")})}/>
            </Control>
            <ul>
                {data.gradient.map((gradient, index) => (
                    <li key={index} className="gradient-selector">
                        <Control key={`${index}control`} deletable={{Delete: () => SetData({...data, gradient: data.gradient.toSpliced(index, 1)})}}>
                            <label key={`${index}label`}>Gradient {index}:</label>
                            <ColourInput key={`${index}colour`} value={gradient} SetColour={(e: any) => SetData({...data, gradient: data.gradient.toSpliced(index, 1, e.target.value)})}/>
                        </Control>
                    </li>
                ))}
            </ul>
            <Control autodisable={data.gradient.length == 0}>
                <label>Gradient Type:</label>
                <select value={data.linear ? "linear" : "radial"} onChange={(e: any) => SetData({...data, linear: e.target.value == "linear" ? true : false})}>
                    <option value="linear">Linear</option>
                    <option value="radial">Radial</option>
                </select>
            </Control>
            <Control autodisable={data.gradient.length == 0 || !data.linear}>
                <label>Gradient Angle:</label>
                <input type="number" value={data.angle} onChange={(e: any) => SetData({...data, angle: e.target.value})}/>
            </Control>
            <Control autodisable={data.gradient.length == 0 || data.linear}>
                <label>Horizontal Gradient Offset (%):</label>
                <RangeInput min={0} max={100} step={.5} value={data.offset?.x || 50} SetRange={(e: any) => SetData({...data, offset: {...data.offset, x: e.target.value}})}/>
            </Control>
            <Control autodisable={data.gradient.length == 0 || data.linear}>
                <label>Vertical Gradient Offset (%):</label>
                <RangeInput min={0} max={100} step={.5} value={data.offset?.y || 50} SetRange={(e: any) => SetData({...data, offset: {...data.offset, y: e.target.value}})}/>
            </Control>
        </div>
    );
}