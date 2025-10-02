import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import Control from '../common/Control';

import type { FooterData } from '../card/unique_element/CardFooter';

import './styles/footer_controls.css';

export default function FooterControls()
{
    const footerData: FooterData = useContext(CONTEXT_cardData).cardData.footer;
    const setFooterData: Function = useContext(CONTEXT_cardData).functions.setFooter;
    const resetCard: Function = useContext(CONTEXT_cardData).functions.resetCard;

    return(
        <div id="component-footercontrols">
            <Control>
                <label>Year:</label>
                <input type="number" value={footerData.year} onChange={(e) => setFooterData({...footerData, year: e.target.value})}/>
            </Control>
            <Control>
                <label>Set:</label>
                <input type="text" value={footerData.set} onChange={(e) => setFooterData({...footerData, set: e.target.value.substring(0, 4)})}/>
            </Control>
            <Control>
                <label>Collector #:</label>
                <input type="number" value={footerData.collectorNum} onChange={(e) => setFooterData({...footerData, collectorNum: e.target.value})}/>
            </Control>
            <Control>
                <label>Collection Size:</label>
                <input type="number" value={footerData.collectorMax} onChange={(e) => setFooterData({...footerData, collectorMax: e.target.value})}/>
            </Control>
            <Control>
                <label>Artist:</label>
                <input type="text" value={footerData.artist} onChange={(e) => setFooterData({...footerData, artist: e.target.value})}/>
            </Control>
            <Control>
                <label>Clear:</label>
                <input type="button" value="Reset to Default" onClick={() => resetCard()}/>
            </Control>
        </div>
    );
}