import { useContext, useState } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import type { CardCore, CardCost, CardDetailGroup, CardStats, CardTitle, CardType } from "../card/card_types";

import Control from "../common/Control";
import ControlDetails from "../common/ControlDetails";
import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";

export default function LayoutControls()
{
    const cardCoreData: CardCore = useContext(CONTEXT_cardData).cardData.card;
    const setCardCoreData: Function = useContext(CONTEXT_cardData).functions.setCore;
    const detailData: CardDetailGroup[] = useContext(CONTEXT_cardData).cardData.details;
    const setDetailData: Function = useContext(CONTEXT_cardData).functions.setDetail;
    const deleteDetailData: Function = useContext(CONTEXT_cardData).functions.deleteDetail;

    const [detailIndex, setDetailIndex] = useState<number>(-1);
    const [elementIndex, setElementIndex] = useState<number>(-1);
    const [newDetailBlock, setNewDetailBlock] = useState<{name: string, valid: boolean}>({
        name: "New Block",
        valid: detailData.findIndex((detail) => detail.name == "New Block") > -1 ? false : true
    });
    const [newElement, setNewElement] = useState<string>("title");

    return(
        <div id="component-layoutcontrols" className="component-controls">
            <div className="column">
                <h2>Card</h2>
                <Control>
                    <label htmlFor="card-height">Height (mm):</label>
                    <input type="number" id="card-height" value={cardCoreData.height} onChange={(e) => setCardCoreData({...cardCoreData, height: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="card-width">Width (mm):</label>
                    <input type="number" id="card-width" value={cardCoreData.width} onChange={(e) => setCardCoreData({...cardCoreData, width: e.target.value})}/>
                </Control>
                
                <h2>Card Detail Blocks</h2>
                {detailData.map((detail, index) => (
                    <Control key={`detailselector${index}`} deletable={{Delete: () => {
                        deleteDetailData(detail);
                        if (detailIndex == index)
                        {
                            setDetailIndex(-1);
                            setElementIndex(-1);
                        }
                    }}}>
                        <label key={`detailselector${index}label`} htmlFor={`${index}`}>{detail.name}:</label>
                        <input type="button" key={`detailselector${index}button`} id={`${index}`} value="Edit" onClick={() => {
                            setDetailIndex(index);
                            index == detailIndex || setElementIndex(-1); // Reset the element index if a new detail is selected, but leave it alone if nothing changes
                        }}/>
                    </Control>
                ))}
                <Control spawnable={{Spawn: () => {
                    if (newDetailBlock.valid)
                    {
                        setDetailData({
                            name: newDetailBlock.name,
                            elements: [],
                            align: "horizontal",
                            justify: "first",
                            position: "start",
                            groupStyle: {
                                background: {
                                    colour: "transparent",
                                    gradient: []
                                },
                                border: "transparent",
                                borderRounding: 0,
                                inset: 0,
                                textColour: "black"
                            },
                            elementStyles: []
                        });
                        setNewDetailBlock({
                            name: "New Block",
                            valid: detailData.findIndex((detail) => detail.name == "New Block") > -1 ? false : true
                        })
                    }
                }}}>
                    <label htmlFor="detail-add-block">Add Detail Block:</label>
                    <input type="text" id="detail-add-block" className={newDetailBlock.valid ? "" : "invalid"} placeholder="Block Name" value={newDetailBlock.name} onChange={(e) => setNewDetailBlock({
                        name: e.target.value,
                        valid: e.target.value != "" ? (detailData.findIndex((detail) => detail.name == e.target.value) == -1 ? true : false) : false
                        })}/>
                </Control>
            </div>
            <div className="column">
                {detailIndex > -1 ? 
                <>
                    <h2>{detailData[detailIndex].name}</h2>
                    <Control>
                        <label htmlFor="detail-align">Block Alignment:</label>
                        <select id="detail-align" value={detailData[detailIndex].align} onChange={(e) => setDetailData({...detailData[detailIndex], align: e.target.value})}>
                            <option value="horizontal">Horizontal</option>
                            <option value="vertical-left">Left</option>
                            <option value="vertical-right">Right</option>
                        </select>
                    </Control>
                    <Control>
                        <label htmlFor="detail-justify">Block Justification:</label>
                        <select id="detail-justify" value={detailData[detailIndex].justify} onChange={(e) => setDetailData({...detailData[detailIndex], justify: e.target.value})}>
                            <option value="first">Start</option>
                            <option value="middle">Middle</option>
                            <option value="last">End</option>
                        </select>
                    </Control>
                    <Control>
                        <label htmlFor="detail-position">Block Element Justification:</label>
                        <select id="detail-position" value={detailData[detailIndex].position} onChange={(e) => setDetailData({...detailData[detailIndex], position: e.target.value})}>
                            <option value="start">Start</option>
                            <option value="center">Center</option>
                            <option value="spread">Spread</option>
                            <option value="end">End</option>
                        </select>
                    </Control>
                    <ControlDetails detail={detailData[detailIndex].groupStyle} SetDetail={(newStyle: DetailStyleData) => setDetailData({...detailData[detailIndex], groupStyle: newStyle})}/>
                    
                    <h2>{detailData[detailIndex].name} Elements</h2>
                    {detailData[detailIndex].elements.map((element, index) => (
                        <Control key={`detailselector${index}`} deletable={{Delete: () => {
                            setDetailData({...detailData[detailIndex], 
                                elements: detailData[detailIndex].elements.toSpliced(index, 1),
                                elementStyles: detailData[detailIndex].elementStyles.toSpliced(index, 1)});
                            if (elementIndex == index)
                            {
                                setElementIndex(-1);
                            }
                        }}}>
                            {/* {element.id?.slice(0, 1).toUpperCase().concat(element.id?.slice(1))} capitalizes the first letter of the id */}
                            <label key={`elementselector${index}label`} htmlFor={`${index}`}>{element.id?.slice(0, 1).toUpperCase().concat(element.id?.slice(1))}:</label>
                            <input type="button" key={`elementselector${index}button`} id={`${index}`} value="Edit" onClick={() => setElementIndex(index)}/>
                        </Control>
                    ))}
                    <Control spawnable={{Spawn: () => {
                        let newDetail: CardTitle | CardCost | CardType | CardStats;
                        switch (newElement)
                        {
                            case "title":
                                newDetail = {id: "title", title: ""} as CardTitle;
                                break;
                            case "cost":
                                newDetail = {id: "cost", cost: [], direction: "row"} as CardCost;
                                break;
                            case "type":
                                newDetail = {id: "type", types: []} as CardType;
                                break;
                            case "stats":
                                newDetail = {id: "stats", stats: [], separator: false} as CardStats;
                                break;
                        }
                        setDetailData({...detailData[detailIndex], elements: [...detailData[detailIndex].elements, newDetail!], elementStyles: [...detailData[detailIndex].elementStyles, {
                            background: {
                                colour: "transparent",
                                gradient: []
                            },
                            borderColour: "transparent",
                            borderThickness: 0,
                            borderRounding: 0,
                            inset: 0,
                            textColour: ""
                        }]});
                        setNewElement("title");
                    }}}>
                        <label htmlFor="detail-block-add-element">Add Detail:</label>
                        <select id="detail-block-add-element" value={newElement} onChange={(e) => setNewElement(e.target.value)}>
                            <option value="title">Card Title</option>
                            <option value="cost">Card Cost</option>
                            <option value="type">Card Type</option>
                            <option value="stats">Card Stats</option>
                        </select>
                    </Control>
                </>
                : ""}
             </div>
            <div className="column">
                {elementIndex > -1 ?
                <>
                {console.log(detailData[detailIndex])}
                    <ControlDetails detail={detailData[detailIndex].elementStyles[elementIndex]} SetDetail={(newStyle: DetailStyleData) => setDetailData({...detailData[detailIndex], elementStyles: detailData[detailIndex].elementStyles.toSpliced(elementIndex, 1, newStyle)})}/>
                </>
                : ""}
            </div>
        </div>
    );
}