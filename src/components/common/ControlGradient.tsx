import Control from "./Control";
import ColourInput from "./ColourInput";

import type { CardBorder, CardBody, CardTitle, CardCost, CardType, CardStats } from "../card/card_types";

import './styles/control_gradient.css';

interface props_ControlGradient {
    data: CardBorder/* | CardBody | CardTitle | CardCost | CardType | CardStats*/,
    SetData: Function
}

export default function ControlGradient({data, SetData}: props_ControlGradient)
{
    return(
        <div className="component-controlgradient">
            <Control>
                <label htmlFor="border-gradient-add">Gradient:</label>
                <input type="button" id="border-gradient-add" value="Add Gradient" onClick={() => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(data.background.gradient.length, 0, "#ffffff")}})}/>
            </Control>
            <ul>
                {data.background.gradient.map((gradient, index) => (
                    <li key={index}>
                        <Control key={`${index}control`}>
                            <label key={`${index}label`} htmlFor={`border-gradient-${index}`}>Gradient {index}:</label>
                            <ColourInput key={`${index}colour`} id={`border-gradient-${index}`} value={gradient} SetColour={(e: any) => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1, e.target.value)}})}/>
                        </Control>
                        <input key={`${index}remove`} className="delete" type="button" value="X" onClick={() => SetData({...data, background: {...data.background, gradient: data.background.gradient.toSpliced(index, 1)}})}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}