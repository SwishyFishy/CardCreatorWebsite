import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import Control from '../common/Control';

import type { FooterData } from '../card/unique_element/CardFooter';

import './styles/footer_controls.css';

export default function FooterControls()
{
    const footerData: FooterData = useContext(CONTEXT_cardData).cardData.footer;
    const setFooterData = useContext(CONTEXT_cardData).functions.setFooter;

    return(
        <div id="component-footercontrols">
            <Control>
                <label htmlFor="footer-year">Year:</label>
                <input type="number" id="footer-year" value={footerData.year} onChange={(e) => setFooterData({...footerData, year: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="footer-set">Set:</label>
                <input type="text" id="footer-set" value={footerData.set} onChange={(e) => setFooterData({...footerData, set: e.target.value.substring(0, 4)})}/>
            </Control>
            <Control>
                <label htmlFor="footer-collector-num">Collector Number:</label>
                <input type="number" id="footer-collector-num" value={footerData.collectorNum} onChange={(e) => setFooterData({...footerData, collectorNum: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="footer-collector-max">Collection Size:</label>
                <input type="number" id="footer-collector-max" value={footerData.collectorMax} onChange={(e) => setFooterData({...footerData, collectorMax: e.target.value})}/>
            </Control>
            <Control>
                <label htmlFor="footer-artist">Artist:</label>
                <input type="text" id="footer-artist" value={footerData.artist} onChange={(e) => setFooterData({...footerData, artistCredit: e.target.value})}/>
            </Control>
        </div>
    );
}