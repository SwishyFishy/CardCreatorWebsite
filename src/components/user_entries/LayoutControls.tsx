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

    const [detailIndeex, setDetailIndex] = useState<number>(0);

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
                
            </div>
        </div>
    );
}