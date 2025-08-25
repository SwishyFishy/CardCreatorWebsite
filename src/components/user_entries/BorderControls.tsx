import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BorderData } from '../card/unique_element/CardBorder';

import Control from '../common/Control';
import ColourInput from '../common/ColourInput';
import RangeInput from '../common/RangeInput';

import './styles/_controls.css';
import './styles/border_controls.css';
import { Gradient } from '../card/card_types';

export default function BorderControls()
{
    const borderData: BorderData = useContext(CONTEXT_cardData).cardData.border;
    const setBorderData: Function = useContext(CONTEXT_cardData).functions.setBorder;

    return(
        <div id="component-bordercontrols" className="component-controls">
            <div className="column">
                <Control>
                    <label htmlFor="border-colour">Colour:</label>
                    {/*Make Gradient a type instead of a class, and implement an independent function which accepts a Gradient type and returns the CSS*/}
                    <ColourInput id="border-colour" value={borderData.background.colour} SetColour={(e: any) => setBorderData({...borderData, background: new Gradient(e.target.value, borderData.background.gradient, /*...*/)/*colour: e.target.value*/})}/>    
                </Control>
                <Control toggleable={{toggle: borderData.background.useGradient, SetToggle: () => setBorderData({...borderData, useGradient: !borderData.background.useGradient})}}>
                    <label htmlFor="border-gradient">Gradient:</label>
                    <ColourInput id="border-gradient" value={borderData.background.gradient.join(',')} SetColour={(e: any) => setBorderData({...borderData, gradient: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="border-thickness">Thickness:</label>
                    <RangeInput id="border-thickness" min={0} max={5} step={.1} value={borderData.thickness} SetRange={(e: any) => setBorderData({...borderData, thickness: e.target.value})}/>
                </Control>
            </div>
            <div className="column">

            </div>
            <div className="column">

            </div>
        </div>
    );
}