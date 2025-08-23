import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import type { CardData, CardBorder, CardArt, CardBody, CardDetailGroup, CardFooter } from "../card/card_types";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

import testArt from '../../assets/test/Necrolemur.jpg'; /*Remove from final prod*/

import './styles/layout.css';

const init: CardData = {
    border: {
        colour: "#000000"
    },
    art: {
        src: testArt,           /*Remove from default in final product*/
        dominance: 80,
        fullart: true,
        vShift: 0,
        hShift: 0,
        zoom: 100
    },
    body: {
        content: ["Rules", "text"],
        colour: "#120fb6ff",
        gradient: "#f108ebff",
        useGradient: true,
        opacity: .75
    },
    footer: {
        year: new Date().getFullYear(),
        set: "SET",
        collectorNum: 0,
        collectorMax: 0,
        artist: "credit the artist"
    },
    details: {              /*Remove from default in final product*/
        ht: 
        {
            elementSet: {elements: [{title: "Suuuuuper Long Card Title. Like really long. Mega long. So long, in fact, that its going to test what happens to overflow.", id: "title"}, {cost: [BasicSymbols[5]], direction: "row", id: "cost"}], align: "horizontal", justify: "first"}, 
            elementStyles: {group: false, style: [
                {
                    colour: "black",
                    gradient: "red",
                    useGradient: true,
                    inset: 0,
                    border: "transparent",
                    borderRounding: 0,
                    textColour: "blue"
                },
                {
                    colour: "transparent",
                    gradient: "lightgrey",
                    useGradient: false,
                    inset: 0,
                    border: "transparent",
                    borderRounding: 50,
                    textColour: "blue"
                }
            ]}
        },
        hm: 
        {
            elementSet: {elements: [{types: ["Cardii", "Type"], id: "type"}], align: "horizontal", justify: "middle"},  
            elementStyles: {group: true, style: {
                colour: "grey",
                gradient: "lightgrey",
                useGradient: true,
                inset: .1,
                border: "black",
                borderRounding: 25,
                textColour: "black"
            }}
        },
        hb: 
        {
            elementSet: {elements: [{stats: ["Card", "Stats"], separator: true, id: "stats"}], align: "horizontal", justify: "last"},  
            elementStyles: {group: false, style: [{
                colour: "grey",
                gradient: "lightgrey",
                useGradient: true,
                inset: .05,
                border: "black",
                borderRounding: 0,
                textColour: "black"
            }]}
        }
    }
};

export const CONTEXT_cardData: React.Context<{
    cardData: CardData, 
    setCardData?: React.Dispatch<React.SetStateAction<CardData>>, 
    functions: {[key: string]: (arg0: any) => void}
}> = createContext({cardData: init, functions: {}});

export default function Layout()
{
    const [cardData, setCardData] = useState<CardData>(init);

    const setBorder = (newBorder: CardBorder) => setCardData({...cardData, border: newBorder});
    const setArt = (newArt: CardArt) => setCardData({...cardData, art: newArt});
    const setBody = (newBody: CardBody) => setCardData({...cardData, body: newBody});
    const setFooter = (newFooter: CardFooter) => setCardData({...cardData, footer: newFooter});
    const setHTDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, ht: newDetail}});
    const setHMDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, hm: newDetail}});
    const setHBDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, hb: newDetail}});
    const setLVTDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, lvt: newDetail}});
    const setLVMDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, lvm: newDetail}});
    const setLVBDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, lvb: newDetail}});
    const setRVTDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, rvt: newDetail}});
    const setRVMDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, rvm: newDetail}});
    const setRVBDetail = (newDetail: CardDetailGroup) => setCardData({...cardData, details: {...cardData.details, rvb: newDetail}});

    return(
        <div id="component-layout">
            <Header/>
            <div className="main">
                <CONTEXT_cardData.Provider value={useMemo(() => ({cardData: cardData, setCardData: setCardData, functions: {setBorder, setArt, setBody, setFooter, setHTDetail, setHMDetail, setHBDetail, setLVTDetail, setLVMDetail, setLVBDetail, setRVTDetail, setRVMDetail, setRVBDetail}}), [cardData])}>
                    <CardPane/>
                    <DesignPane/>
                </CONTEXT_cardData.Provider>
            </div>
            <Footer/>
        </div>
    );
}