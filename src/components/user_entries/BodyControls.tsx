import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BodyData } from '../card/unique_element/CardBody';

import Control from '../common/Control';
import ControlUniversalProperties from '../common/ControlUniversalProperties';
import RangeInput from '../common/RangeInput';
import TextSymbolInput from '../common/TextSymbolInput';

import './styles/_controls.css';
import './styles/body_controls.css';
import type { Gradient, Border } from '../card/card_types';

export default function BodyControls()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;
    const setBodyData: Function = useContext(CONTEXT_cardData).functions.setBody;

    return(
        <div id="component-bodycontrols" className="component-controls">
            <div className="column">
                <h2>Body Content</h2>
                <Control>
                    <label>Content:</label>
                    <TextSymbolInput value={bodyData.content.join('\n')} SetText={(e: any) => setBodyData({...bodyData, content: e.target.value.split('\n')})}/>
                </Control>
            </div>
            <div className="column">
                <h2>Body Background</h2>
                <ControlUniversalProperties data={{background: bodyData.background, border: bodyData.border}} SetData={(newBG: Gradient, newBorder: Border) => setBodyData({...bodyData, background: newBG, border: newBorder})}/>
                <Control autodisable={bodyData.background.colour == "Transparent" && bodyData.background.gradient.length == 0}>
                    <label>Opacity (%):</label>
                    <RangeInput min={0} max={100} step={1} value={bodyData.opacity * 100} SetRange={(e: any) => setBodyData({...bodyData, opacity: e.target.value / 100})}/>
                </Control>
            </div>
            <div className="column">

            </div>
        </div>
    );
}