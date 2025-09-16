import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { ArtData } from "../card/unique_element/CardArt";

import Control from '../common/Control';
import RangeInput from '../common/RangeInput';

import './styles/_controls.css';
import './styles/art_controls.css';

export default function ArtControls()
{
    const artData: ArtData = useContext(CONTEXT_cardData).cardData.art;
    const setArtData: Function = useContext(CONTEXT_cardData).functions.setArt;

    return(
        <div id="component-artcontrols" className="component-controls">
            <div className="column">
                <h2>Art Size</h2>
                <Control>
                    <label>Artbox Size (%):</label>
                    <RangeInput min={0} max={100} step={1} value={artData.dominance} SetRange={(e: any) => setArtData({...artData, dominance: e.target.value})}/>
                </Control>
                <Control>
                    <label>Artbox/Body Gap (mm):</label>
                    <RangeInput min={0} max={88} step={.1} value={artData.gap} SetRange={(e: any) => setArtData({...artData, gap: e.target.value})}/>
                </Control>
                <Control>
                    <label>Fullart:</label>
                    <input type="checkbox" checked={artData.fullart} onChange={() => {setArtData({...artData, fullart: !artData.fullart})}}/>
                </Control>
            </div>
            <div className="column">
                <h2>Art Position</h2>                 
                <Control>
                    <label>Vertical Shift (px):</label>
                    <input type="number" value={artData.vShift} onChange={(e) => setArtData({...artData, vShift: e.target.value})}/>
                </Control>
                <Control>
                    <label>Horizontal Shift (px):</label>
                    <input type="number" value={artData.hShift} onChange={(e) => setArtData({...artData, hShift: e.target.value})}/>
                </Control>
                <Control>
                    <label>Zoom (%):</label>
                    <input type="number" value={artData.zoom} onChange={(e) => setArtData({...artData, zoom: e.target.value})}/>
                </Control>
            </div>
            <div className="column">
                <h2>Artwork</h2>
                <Control>
                    <label>Upload Image:</label>
                    <input type="file" accept=".png, .jpg, .jpeg" onChange={(e) => {
                        setArtData({...artData, src: URL.createObjectURL(e.target.files![0])});
                    }}/>
                </Control>
            </div>
        </div>
    );
}