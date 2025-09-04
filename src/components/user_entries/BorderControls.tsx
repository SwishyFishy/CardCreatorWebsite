import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BorderData } from '../card/unique_element/CardBorder';

import ControlUniversalProperties from '../common/ControlUniversalProperties';

import './styles/_controls.css';
import './styles/border_controls.css';
import type { Gradient, Border } from '../card/card_types';

export default function BorderControls()
{
    const borderData: BorderData = useContext(CONTEXT_cardData).cardData.border;
    const setBorderData: Function = useContext(CONTEXT_cardData).functions.setBorder;

    return(
        <div id="component-bordercontrols" className="component-controls">
            <div className="column">
                <h2>Background</h2>
                <ControlUniversalProperties data={{background: borderData.background, border: borderData.border}} SetData={(newBG: Gradient, newBorder: Border) => setBorderData({...borderData, background: newBG, border: newBorder})}/>
            </div>
            <div className="column">

            </div>
        </div>
    );
}