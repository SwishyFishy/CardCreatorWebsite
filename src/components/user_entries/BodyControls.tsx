import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BodyData } from '../card/unique_element/CardBody';

import Control from '../common/Control';
import ColourInput from '../common/ColourInput';
import RangeInput from '../common/RangeInput';

import './styles/_controls.css';
import './styles/body_controls.css';

export default function BodyControls()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;
    const setBodyData: Function = useContext(CONTEXT_cardData).functions.setBody;

    return(
        <div id="component-bodycontrols" className="component-controls">
            <div className="column">
                <Control>
                    <label htmlFor="body-content">Content:</label>
                    <textarea id="body-content" value={bodyData.content.join('\n')} onChange={(e) => {
                        setBodyData({...bodyData, content: e.target.value.split('\n')});
                        const thisTextarea: HTMLElement = document.getElementById("body-content")!;
                        thisTextarea.style.setProperty("height", "auto");
                        thisTextarea.style.setProperty("height", `${thisTextarea.scrollHeight}px`);
                    }}/>
                </Control>
            </div>
            <div className="column">
                <Control>
                    <label htmlFor="body-colour">Colour:</label>
                    <ColourInput id="body-colour" value={bodyData.colour} SetColour={(e: any) => setBodyData({...bodyData, colour: e.target.value})}/>    
                </Control>
                <Control toggleable={{toggle: bodyData.useGradient, SetToggle:() => setBodyData({...bodyData, useGradient: !bodyData.useGradient})}}>
                    <label htmlFor="body-gradient">Gradient:</label>
                    <ColourInput id="body-gradient" value={bodyData.gradient} SetColour={(e: any) => setBodyData({...bodyData, gradient: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="body-opacity">Opacity:</label>
                    <RangeInput id="body-opacity" min={0} max={1} step={0.01} value={bodyData.opacity} SetRange={(e: any) => setBodyData({...bodyData, opacity: e.target.value})}/>
                </Control>
            </div>
            <div className="column">

            </div>
        </div>
    );
}