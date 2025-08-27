import { useContext } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { CardCore, CardDetailGroup } from "../card/card_types";

import Control from "../common/Control";

export default function  LayoutControls()
{
    const cardCoreData: CardCore = useContext(CONTEXT_cardData).cardData.card;
    const setCardCore: Function = useContext(CONTEXT_cardData).functions.setCore;
    const detailData: CardDetailGroup[] = useContext(CONTEXT_cardData).cardData.details;

    return(
        <div id="component-layoutcontrols" className="component-controls">
            <div className="column">
                <Control>
                    <label htmlFor="card-height">Height (mm):</label>
                    <input type="number" id="card-height" value={cardCoreData.height} onChange={(e) => setCardCore({...cardCoreData, height: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="card-width">Width (mm):</label>
                    <input type="number" id="card-width" value={cardCoreData.width} onChange={(e) => setCardCore({...cardCoreData, width: e.target.value})}/>
                </Control>
            </div>
            <div className="column">

            </div>
            <div className="column">

            </div>
        </div>
    );
}