import { useContext, useState } from "react";
import { CONTEXT_cardData } from "../page/Layout";

import { Character, type CardCore, type CardCost, type CardDetailGroup, type CardStats, type CardTitle, type CardType } from "../card/card_types";

import Control from "../common/Control";
import ControlDetails from "../common/ControlDetails";
import type { DetailStyleData } from "../card/duplicable_element/CardDetailBlock";
import ControlDetailTitle from "../common/ControlDetailTitle";
import ControlDetailCost from "../common/ControlDetailCost";
import ControlDetailType from "../common/ControlDetailType";
import ControlDetailStats from "../common/ControlDetailStats";

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

    const ContentControls = () => {
        const detail: CardTitle | CardCost | CardType | CardStats = detailData[detailIndex].elements[elementIndex];
        const replaceDetail: Function = (newDetail: CardTitle | CardCost | CardType | CardStats) => setDetailData({...detailData[detailIndex], elements: detailData[detailIndex].elements.toSpliced(elementIndex, 1, newDetail)})

        switch (detailData[detailIndex].elements[elementIndex].id)
        {
            case "title":
                return <ControlDetailTitle detail={detail as CardTitle} ReturnDetail={replaceDetail}/>
        
            case "cost":
                return <ControlDetailCost detail={detail as CardCost} ReturnDetail={replaceDetail}/>

            case "type":
                return <ControlDetailType detail={detail as CardType} ReturnDetail={replaceDetail}/>

            case "stats":
                return <ControlDetailStats detail={detail as CardStats} ReturnDetail={replaceDetail}/>

            default:
                return <p>Something went wrong</p>;
        }
    }

    return(
        <div id="component-layoutcontrols" className="component-controls">
            <div className="column">
                <h2>Card</h2>
                <Control>
                    <label>Height (mm):</label>
                    <input type="number" value={cardCoreData.height} onChange={(e) => setCardCoreData({...cardCoreData, height: e.target.value})}/>
                </Control>
                <Control>
                    <label>Width (mm):</label>
                    <input type="number" value={cardCoreData.width} onChange={(e) => setCardCoreData({...cardCoreData, width: e.target.value})}/>
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
                        <label key={`detailselector${index}label`}>{detail.name}:</label>
                        <input type="button" key={`detailselector${index}button`} value="Edit" onClick={() => {
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
                                    colour: "Transparent",
                                    gradient: []
                                },
                                border: {
                                    colour: "Transparent",
                                    thickness: 0,
                                    radius: 0,
                                    inset: 0
                                },
                                textColour: "#000000"
                            },
                            elementStyles: []
                        });
                        setNewDetailBlock({
                            name: "New Block",
                            valid: detailData.findIndex((detail) => detail.name == "New Block") > -1 ? false : true
                        })
                    }
                }}}>
                    <label>Add Detail Block:</label>
                    <input type="text" className={newDetailBlock.valid ? "" : "invalid"} placeholder="Block Name" value={newDetailBlock.name} onChange={(e) => setNewDetailBlock({
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
                        <label>Block Alignment:</label>
                        <select value={detailData[detailIndex].align} onChange={(e) => setDetailData({...detailData[detailIndex], align: e.target.value})}>
                            <option value="horizontal">Horizontal</option>
                            <option value="vertical-left">Left</option>
                            <option value="vertical-right">Right</option>
                        </select>
                    </Control>
                    <Control>
                        <label>Block Justification:</label>
                        <select value={detailData[detailIndex].justify} onChange={(e) => setDetailData({...detailData[detailIndex], justify: e.target.value})}>
                            <option value="first">Start</option>
                            <option value="middle">Middle</option>
                            <option value="last">End</option>
                        </select>
                    </Control>
                    <Control>
                        <label>Block Element Justification:</label>
                        <select value={detailData[detailIndex].position} onChange={(e) => setDetailData({...detailData[detailIndex], position: e.target.value})}>
                            <option value="start">Start</option>
                            <option value="center">Center</option>
                            <option value="spread">Spread</option>
                            <option value="end">End</option>
                        </select>
                    </Control>
                    <ControlDetails detail={detailData[detailIndex].groupStyle} SetDetail={(newStyle: DetailStyleData) => setDetailData({...detailData[detailIndex], groupStyle: newStyle})} verticalTextMatters={detailData[detailIndex].align != "horizontal"}/>
                    
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
                            <label key={`elementselector${index}label`}>{element.id?.slice(0, 1).toUpperCase().concat(element.id?.slice(1))}:</label>
                            <input type="button" key={`elementselector${index}button`} value="Edit" onClick={() => setElementIndex(index)}/>
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
                                newDetail = {id: "stats", stats: [], separator: new Character('/')} as CardStats;
                                break;
                        }
                        setDetailData({...detailData[detailIndex], elements: [...detailData[detailIndex].elements, newDetail!], elementStyles: [...detailData[detailIndex].elementStyles, {
                            background: {
                                colour: "Transparent",
                                gradient: []
                            },
                            border: {
                                colour: "Transparent",
                                thickness: 0,
                                radius: 0,
                                inset: 0
                            },
                            textColour: "#000000",
                            ...newDetail!
                        }]});
                        setNewElement("title");
                    }}}>
                        <label>Add Detail:</label>
                        <select value={newElement} onChange={(e) => setNewElement(e.target.value)}>
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
                    <h2>{detailData[detailIndex].elements[elementIndex].id!.slice(0, 1).toUpperCase().concat(detailData[detailIndex].elements[elementIndex].id!.slice(1))} Style</h2>
                    <ControlDetails detail={detailData[detailIndex].elementStyles[elementIndex]} SetDetail={(newStyle: DetailStyleData) => setDetailData({...detailData[detailIndex], elementStyles: detailData[detailIndex].elementStyles.toSpliced(elementIndex, 1, newStyle)})}  verticalTextMatters={detailData[detailIndex].align != "horizontal"}/>
                    
                    <h2>{detailData[detailIndex].elements[elementIndex].id!.slice(0, 1).toUpperCase().concat(detailData[detailIndex].elements[elementIndex].id!.slice(1))} Content</h2>
                    {ContentControls()}
                </>
                : ""}
            </div>
        </div>
    );
}