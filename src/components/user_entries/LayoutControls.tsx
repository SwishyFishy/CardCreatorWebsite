import { useContext, useState } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { CardCore, CardDetailGroup } from "../card/card_types";

import Control from "../common/Control";

export default function  LayoutControls()
{
    const cardCoreData: CardCore = useContext(CONTEXT_cardData).cardData.card;
    const setCardCoreData: Function = useContext(CONTEXT_cardData).functions.setCore;
    const detailData: CardDetailGroup[] = useContext(CONTEXT_cardData).cardData.details;
    const setDetailData: Function = useContext(CONTEXT_cardData).functions.setDetail;

    const [detailIndex, setDetailIndex] = useState<number>(0);

    return(
        <div id="component-layoutcontrols" className="component-controls">
            <div className="column">
                <Control>
                    <label htmlFor="card-height">Height (mm):</label>
                    <input type="number" id="card-height" value={cardCoreData.height} onChange={(e) => setCardCoreData({...cardCoreData, height: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="card-width">Width (mm):</label>
                    <input type="number" id="card-width" value={cardCoreData.width} onChange={(e) => setCardCoreData({...cardCoreData, width: e.target.value})}/>
                </Control>
            </div>
            <div className="column">
                {detailData.map((detail, index) => (
                    <Control key={`detailselector${index}`}>
                        <label key={`detailselector${index}label`} htmlFor={`${index}`}>{detail.name}:</label>
                        <input type="button" key={`detailselector${index}button`} id={`${index}`} value="Edit" onClick={() => setDetailIndex(index)}/>
                    </Control>
                ))}
            </div>
            <div className="column">
                <Control>
                    <label htmlFor="detail-align">Alignment:</label>
                    <select id="detail-align" value={detailData[detailIndex].elementSet.align} onChange={(e) => setDetailData({...detailData[detailIndex], elementSet: {...detailData[detailIndex].elementSet, align: e.target.value}})}>
                        <option value="horizontal">Horizontal</option>
                        <option value="vertical-left">Left</option>
                        <option value="vertical-right">Right</option>
                    </select>
                </Control>
                <Control>
                    <label htmlFor="detail-justify">Justification:</label>
                    <select id="detail-justify" value={detailData[detailIndex].elementSet.justify} onChange={(e) => setDetailData({...detailData[detailIndex], elementSet: {...detailData[detailIndex].elementSet, justify: e.target.value}})}>
                        <option value="first">Start</option>
                        <option value="middle">Middle</option>
                        <option value="last">End</option>
                    </select>
                </Control>
            </div>
        </div>
    );
}