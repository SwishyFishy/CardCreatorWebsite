import {v4 as uuid} from 'uuid';

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
    const baseId: string = uuid();

    return(
        <div className="component-controlbackground">   
            <Control>
                <label htmlFor={`${baseId}-bg-colour`}>Colour:</label>
                <ColourInput id={`${baseId}-bg-colour`} value={data.colour} SetColour={(e: any) => SetData({...data, colour: e.target.value})}/>    
            </Control>
            <Control>
                <label htmlFor={`${baseId}-bg-add`}>Gradient:</label>
                <input type="button" id={`${baseId}-bg-add`} value="Add Gradient" onClick={() => SetData({...data, gradient: data.gradient.toSpliced(data.gradient.length, 0, "#ffffff")})}/>
            </Control>
            <ul>
                {data.gradient.map((gradient, index) => (
                    <li key={index} className="gradient-selector">
                        <Control key={`${index}control`} deletable={{Delete: () => SetData({...data, gradient: data.gradient.toSpliced(index, 1)})}}>
                            <label key={`${index}label`} htmlFor={`border-gradient-${index}`}>Gradient {index}:</label>
                            <ColourInput key={`${index}colour`} id={`border-gradient-${index}`} value={gradient} SetColour={(e: any) => SetData({...data, gradient: data.gradient.toSpliced(index, 1, e.target.value)})}/>
                        </Control>
                    </li>
                ))}
                <li className={data.gradient.length > 0 ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-type`}>Gradient Type:</label>
                        <select id={`${baseId}-bg-gradient-type`} value={data.linear ? "linear" : "radial"} onChange={(e: any) => SetData({...data, linear: e.target.value == "linear" ? true : false})}>
                            <option value="linear">Linear</option>
                            <option value="radial">Radial</option>
                        </select>
                    </Control>
                </li>
                <li className={data.gradient.length > 0 && data.linear ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-angle`}>Gradient Angle:</label>
                        <input type="number" id={`${baseId}-bg-gradient-angle`} value={data.angle} onChange={(e: any) => SetData({...data, angle: e.target.value})}/>
                    </Control>
                </li>
                <li className={data.gradient.length > 0 && !data.linear ? "visible" : "hidden"}>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-offsetX`}>Horizontal Gradient Offset (%):</label>
                        <RangeInput id={`${baseId}-bg-gradient-offsetX`} min={0} max={100} step={1} value={data.offset?.x || 50} SetRange={(e: any) => SetData({...data, offset: {...data.offset, x: e.target.value}})}/>
                    </Control>
                    <Control>
                        <label htmlFor={`${baseId}-bg-gradient-offsetY`}>Vertical Gradient Offset (%):</label>
                        <RangeInput id={`${baseId}-bg-gradient-offsetY`} min={0} max={100} step={1} value={data.offset?.y || 50} SetRange={(e: any) => SetData({...data, offset: {...data.offset, y: e.target.value}})}/>
                    </Control>
                </li>
            </ul>
        </div>
    );
}