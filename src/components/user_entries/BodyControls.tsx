import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BodyData } from '../card/unique_element/CardBody';

import Control from '../common/Control';
import ControlBackground from '../common/ControlBackground';
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
                    <textarea id="body-content" rows={5} value={bodyData.content.join('\n')} onChange={(e) => setBodyData({...bodyData, content: e.target.value.split('\n')})}/>
                </Control>
            </div>
            <div className="column">
                <ControlBackground data={bodyData} SetData={setBodyData}/>
                <Control>
                    <label htmlFor="body-opacity">Opacity (%):</label>
                    <RangeInput id="body-opacity" min={0} max={100} step={1} value={bodyData.opacity * 100} SetRange={(e: any) => setBodyData({...bodyData, opacity: e.target.value / 100})}/>
                </Control>
            </div>
            <div className="column">

            </div>
        </div>
    );
}