import { useContext, useState } from "react";
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

    const [uploadedImages, setUploadedImages] = useState<{src: string, name: string}[]>([]);

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
                {uploadedImages.map((image) => (
                    <Control key={`uploadedImages${image.src}`}>
                        <label>Set Artwork:</label>
                        <input type="button" value={image.name} onClick={() => {setArtData({...artData, src: image.src})}}/>
                    </Control>
                ))}
                <Control>
                    <label>Upload Images:</label>
                    <input type="file" accept=".png, .jpg, .jpeg" multiple={true} onChange={(e) => {
                        const newImages: {src: string, name: string}[] = [];
                        Array.from(e.target.files!).forEach((file) => {
                            const src: string = URL.createObjectURL(file);
                            newImages.push({src: src, name: file.name});
                            setArtData({...artData, src: src});
                        })
                        setUploadedImages([...uploadedImages, ...newImages]);
                    }}/>
                </Control>
            </div>
        </div>
    );
}