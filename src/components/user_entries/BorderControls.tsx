import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BorderData } from '../card/unique_element/CardBorder';

import Control from '../common/Control';

import './styles/border_controls.css';

export default function BorderControls()
{
    const borderData: BorderData = useContext(CONTEXT_cardData).cardData.border;
    const setBorderData: Function = useContext(CONTEXT_cardData).functions.setBorder;

    return(
        <div id="component-bordercontrols">
            <Control>
                <label htmlFor="border-colour">Colour:</label>
                <input type="color" id="border-colour" value={borderData.colour} onChange={(e) => setBorderData({...borderData, colour: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="border-gradient">Gradient:</label>
                <Control>
                    <input type="checkbox" id="border-gradient-enable" checked={borderData.useGradient} onChange={() => setBorderData({...borderData, useGradient: !borderData.useGradient})}/>
                    <input type="color" id="editor-gradient" value={borderData.gradient} onChange={(e) => setBorderData({...borderData, gradient: e.target.value})}/>
                </Control>
            </Control>
        </div>
    );
}