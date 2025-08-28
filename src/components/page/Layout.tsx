import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import type { CardCore, CardData, CardBorder, CardArt, CardBody, CardDetailGroup, CardFooter } from "../card/card_types";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

import testArt from '../../assets/test/Necrolemur.jpg'; /*Remove from final prod*/

import './styles/layout.css';

const init: CardData = {
    card: {
        height: 88,
        width: 63
    },
    border: {
        background: {
            colour: "#000000", 
            gradient: ["#ffffff", "#000000"],
            linear: true, 
            angle: 135
        },
        thickness: 2.5
    },
    art: {
        src: testArt,           /*Remove from default in final product*/
        dominance: 60,
        fullart: false,
        border: 2.5,
        vShift: 0,
        hShift: 0,
        zoom: 100
    },
    body: {
        content: ["Rules", "text"],
        background: {
            colour: "#120fb6",
            gradient: ["#f108eb"],
            linear: false,
        },
        opacity: .75
    },
    footer: {
        year: new Date().getFullYear(),
        set: "SET",
        collectorNum: 0,
        collectorMax: 0,
        artist: "credit the artist"
    },
    details: [              /*Remove from default in final product*/
        {
            name: "titlebar",
            elements: [{title: "Card Title", id: "title"}, {cost: [BasicSymbols[5]], direction: "row", id: "cost"}], 
            align: "horizontal", 
            justify: "first", 
            position: "spread",
            elementStyles: [
                {
                    background: {
                        colour: "grey",
                        gradient: [],
                    },
                    inset: 0,
                    border: "transparent",
                    borderRounding: 0,
                    textColour: "blue"
                },
                {
                    background: {
                        colour: "transparent",
                        gradient: []
                    },
                    inset: 0,
                    border: "transparent",
                    borderRounding: 50,
                    textColour: "blue"
                }
            ]
        },
        {
            name: "Typeline",
            elements: [{types: ["Cardii", "Type"], id: "type"}], align: "horizontal", justify: "middle",  
            position: "center",
            groupStyle: {
                background: {
                        colour: "grey",
                        gradient: ["red"]
                    },
                inset: .1,
                border: "black",
                borderRounding: 25,
                textColour: "black"
            }
        },
        {
            name: "Stats",elements: [{stats: ["Card", "Stats"], separator: true, id: "stats"}], align: "horizontal", justify: "last", position: "end",  
            elementStyles: [
                {
                    background: {
                        colour: "grey",
                        gradient: ["red"]
                    },
                    inset: .05,
                    border: "black",
                    borderRounding: 0,
                    textColour: "black"
                }
            ]
        }
    ]
};

export const CONTEXT_cardData: React.Context<{
    cardData: CardData, 
    setCardData?: React.Dispatch<React.SetStateAction<CardData>>, 
    functions: {[key: string]: (arg0: any) => void}
}> = createContext({cardData: init, functions: {}});

export default function Layout()
{
    const [cardData, setCardData] = useState<CardData>(init);

    const setCore = (newCore: CardCore) => setCardData({...cardData, card: newCore});
    const setBorder = (newBorder: CardBorder) => setCardData({...cardData, border: newBorder});
    const setArt = (newArt: CardArt) => setCardData({...cardData, art: newArt});
    const setBody = (newBody: CardBody) => setCardData({...cardData, body: newBody});
    const setFooter = (newFooter: CardFooter) => setCardData({...cardData, footer: newFooter});
    const setDetail = (newDetail: CardDetailGroup) => {
        let index: number = cardData.details.findIndex((detail) => detail.name == newDetail.name);
        if (index == -1)
        {
            setCardData({...cardData, details: [...cardData.details, newDetail]});
        }
        else
        {
            setCardData({...cardData, details: cardData.details.toSpliced(index, 1, newDetail)});
        }
    };
    const deleteDetail = (detail: CardDetailGroup) => {
        let index: number = cardData.details.findIndex((d) => detail.name == d.name);
        if (index > -1)
        {
            setCardData({...cardData, details: cardData.details.toSpliced(index, 1)});
        }
    }

    return(
        <div id="component-layout">
            <Header/>
            <div className="main">
                <CONTEXT_cardData.Provider value={useMemo(() => ({cardData: cardData, setCardData: setCardData, functions: {setCore, setBorder, setArt, setBody, setFooter, setDetail, deleteDetail}}), [cardData])}>
                    <CardPane/>
                    <DesignPane/>
                </CONTEXT_cardData.Provider>
            </div>
            <Footer/>
        </div>
    );
}