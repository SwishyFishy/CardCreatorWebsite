import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import { type CardCore, type CardData, type CardBorder, type CardArt, type CardBody, type CardDetailGroup, type CardFooter, Character } from "../card/card_types";
import type { SymbolData } from "../symbol_library/Symbol";

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
        border: {
            colour: "#000000",
            thickness: 2.5,
            inset: 0,
            radius: 2.5
        }
    },
    art: {
        src: testArt,           /*Remove from default in final product*/
        dominance: 60,
        fullart: false,
        gap: 2.5,
        vShift: 0,
        hShift: 0,
        zoom: 150,
        background: {
            colour: "transparent",
            gradient: []
        },
        border: {
            colour: "transparent",
            thickness: 0,
            inset: 0,
            radius: 0
        }
    },
    body: {
        content: ["Rules", "text"],
        background: {
            colour: "#120fb6",
            gradient: ["#f108eb"],
            linear: false,
        },
        border: {
            colour: "#ffffff",
            thickness: 0,
            inset: 0,
            radius: 0
        },
        justify: "flex-start",
        align: "left",
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
            elements: [{title: "Card Title", id: "title"}, {cost: [BasicSymbols[0]], direction: "row", id: "cost"}], 
            align: "horizontal", 
            justify: "first", 
            position: "spread",
            groupStyle: {
                background: {
                    colour: "transparent",
                    gradient: []
                },
                border: 
                {
                    colour: "transparent",
                    thickness: 0,
                    radius: 0,
                    inset: 0
                },
                textColour: "",
                verticalText: "up"
            },
            elementStyles: [
                {
                    background: {
                        colour: "#999999",
                        gradient: [],
                    },
                    border: 
                    {
                        colour: "transparent",
                        thickness: 0,
                        radius: 0,
                        inset: 0
                    },
                    textColour: "#2222ff",
                    verticalText: "up"
                },
                {
                    background: {
                        colour: "transparent",
                        gradient: []
                    },
                    border: 
                    {
                        colour: "transparent",
                        thickness: 0,
                        radius: 0,
                        inset: 0
                    },
                    textColour: "#2222ff",
                    verticalText: "up"
                }
            ]
        },
        {
            name: "Typeline",
            elements: [{types: ["Cardii", "Type"], id: "type"}], align: "horizontal", justify: "middle",  
            position: "center",
            groupStyle: {
                background: {
                    colour: "#666666",
                    gradient: ["#ff6611"]
                },
                border: {
                    colour: "#000000",
                    thickness: .1,
                    radius: 25,
                    inset: .1
                },
                textColour: "#000000",
                verticalText: "up"
            },
            elementStyles: [{
                background: {
                    colour: "transparent",
                    gradient: []
                },
                    border: 
                    {
                        colour: "transparent",
                        thickness: 0,
                        radius: 0,
                        inset: 0
                    },
                textColour: "",
                verticalText: "up"
            }]
        },
        {
            name: "Stats", 
            elements: [{stats: ["Card", "Stats"], separator: new Character('/'), id: "stats"}], 
            align: "horizontal", 
            justify: "last", 
            position: "end",
            groupStyle: {
                background: {
                    colour: "transparent",
                    gradient: []
                },
                    border: 
                    {
                        colour: "transparent",
                        thickness: 0,
                        radius: 0,
                        inset: 0
                    },
                textColour: "",
                verticalText: "up"
            },
            elementStyles: [
                {
                    background: {
                        colour: "#999999",
                        gradient: ["#ff4444"]
                    },
                    border: 
                    {
                        colour: "#000000",
                        thickness: 0.1,
                        radius: 0,
                        inset: 0.05
                    },
                    textColour: "#000000",
                    verticalText: "up"
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

const initSymbols: SymbolData[] = [];

export const CONTEXT_symbols: React.Context<{
    symbols: SymbolData[], 
    setSymbols?: Function
}> = createContext({symbols: initSymbols});

export default function Layout()
{
    const [cardData, setCardData] = useState<CardData>(init);
    const [symbols, setSymbols] = useState<SymbolData[]>(BasicSymbols);

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
                <CONTEXT_symbols.Provider value={useMemo(() => ({symbols: symbols, setSymbols: (symbols: SymbolData[]) => setSymbols([...symbols])}), [symbols])}>
                    <CONTEXT_cardData.Provider value={useMemo(() => ({cardData: cardData, setCardData: setCardData, functions: {setCore, setBorder, setArt, setBody, setFooter, setDetail, deleteDetail}}), [cardData])}>
                        <CardPane/>
                        <DesignPane/>
                    </CONTEXT_cardData.Provider>
                </CONTEXT_symbols.Provider>
            </div>
            <Footer/>
        </div>
    );
}