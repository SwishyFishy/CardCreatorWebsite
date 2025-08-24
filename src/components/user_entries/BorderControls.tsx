import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BorderData } from '../card/unique_element/CardBorder';

import Control from '../common/Control';
import ToggleableControl from '../common/ToggleableControl';
import ColourInput from '../common/ColourInput';
import RangeInput from '../common/RangeInput';

import './styles/border_controls.css';

export default function BorderControls()
{
    const borderData: BorderData = useContext(CONTEXT_cardData).cardData.border;
    const setBorderData: Function = useContext(CONTEXT_cardData).functions.setBorder;

    return(
        <div id="component-bordercontrols">
            <Control>
                <label htmlFor="border-colour">Colour:</label>
                <ColourInput id="border-colour" value={borderData.colour} SetColour={(e: any) => setBorderData({...borderData, colour: e.target.value})}/>    
            </Control>
            <ToggleableControl toggle={borderData.useGradient} SetToggle={() => setBorderData({...borderData, useGradient: !borderData.useGradient})}>
                <label htmlFor="border-gradient">Gradient:</label>
                <ColourInput id="border-gradient" value={borderData.gradient} SetColour={(e: any) => setBorderData({...borderData, gradient: e.target.value})}/>
            </ToggleableControl>
            <Control>
                <label htmlFor="border-thickness">Thickness:</label>
                <RangeInput id="border-thickness" min={0} max={5} step={.1} value={borderData.thickness} SetRange={(e: any) => setBorderData({...borderData, thickness: e.target.value})}/>
            </Control>
        </div>
    );
}