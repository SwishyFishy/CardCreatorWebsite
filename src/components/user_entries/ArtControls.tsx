import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { ArtData } from "../card/unique_element/CardArt";

import Control from '../common/Control';
import RangeInput from '../common/RangeInput';

import './styles/art_controls.css';

export default function ArtControls()
{
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;
    const setArtData: Function = useContext(CONTEXT_cardData).functions.setArt;

    return(
        <div id="component-artcontrols">
            <div className="column">
                <Control>
                    <label htmlFor="art-dominance">Artbox Size:</label>
                    <RangeInput id="art-dominance" min={0} max={100} step={1} value={artData.dominance} SetRange={(e: any) => setArtData({...artData, dominance: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="art-border">Artbox Border Thickness:</label>
                    <RangeInput id="art-border" min={0} max={5} step={.1} value={artData.border} SetRange={(e: any) => setArtData({...artData, border: e.target.value})}/>
                </Control>
            </div>
            <div className="column">                    
                <Control>
                    <label htmlFor="art-vShift">Vertical Shift:</label>
                    <input type="number" id="art-vShift" value={artData.vShift} onChange={(e) => setArtData({...artData, vShift: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="art-hShift">Horizontal Shift:</label>
                    <input type="number" id="art-hShift" value={artData.hShift} onChange={(e) => setArtData({...artData, hShift: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="art-zoom">Zoom:</label>
                    <input type="number" id="art-hShift" value={artData.zoom} onChange={(e) => setArtData({...artData, zoom: e.target.value})}/>
                </Control>
            </div>
            <div className="column">
                <Control>
                    <label htmlFor="art-fullart">Fullart:</label>
                    <input type="checkbox" id="art-fullart" checked={artData.fullart} onChange={() => {setArtData({...artData, fullart: !artData.fullart})}}/>
                </Control>
            </div>
        </div>
    );
}