import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { BorderData } from '../card/unique_element/CardBorder';

import Control from '../common/Control';
import ControlBackground from '../common/ControlBackground';
import RangeInput from '../common/RangeInput';

import './styles/_controls.css';
import './styles/border_controls.css';

export default function BorderControls()
{
    const borderData: BorderData = useContext(CONTEXT_cardData).cardData.border;
    const setBorderData: Function = useContext(CONTEXT_cardData).functions.setBorder;

    return(
        <div id="component-bordercontrols" className="component-controls">
            <div className="column">
                <h2>Background</h2>
                <ControlBackground data={borderData} SetData={setBorderData}/>
                <Control>
                    <label htmlFor="border-thickness">Border Thickness (mm):</label>
                    <RangeInput id="border-thickness" min={0} max={31.5} step={.1} value={borderData.thickness} SetRange={(e: any) => setBorderData({...borderData, thickness: e.target.value})}/>
                </Control>
            </div>
            <div className="column">

            </div>
            <div className="column">

            </div>
        </div>
    );
}