import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import { type CardCore, type CardData, type CardBorder, type CardArt, type CardBody, type CardDetailGroup, type CardFooter, Character } from "../card/card_types";
import type { SymbolData } from "../symbol_library/Symbol";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";
import ResetWarning from "./ResetWarning";

import './styles/layout.css';

const init: CardData = {
    card: {
        height: 88,
        width: 63
    },
    border: {
        background: {
            colour: "Transparent",
            gradient: []
        },
        border: {
            colour: "#000000",
            thickness: 2.5,
            inset: 0,
            radius: 2.5
        }
    },
    body: {
        background: {
            colour: "#999999",
            gradient: []
        },
        border: {
            colour: "Transparent",
            thickness: 0,
            inset: 0,
            radius: 0
        },
        content: [],
        justify: "flex-start",
        align: "left",
        opacity: 1
    },
    art: {
        background: {
            colour: "Transparent",
            gradient: []
        },
        border: {
            colour: "Transparent",
            thickness: 0,
            inset: 0,
            radius: 0
        },
        src: "",
        dominance: 50,
        fullart: false,
        gap: 0,
        vShift: 0,
        hShift: 0,
        zoom: 100
    },
    footer: {
        year: new Date().getFullYear(),
        set: "SET",
        collectorNum: 0,
        collectorMax: 0,
        artist: "credit your artist!"   
    },
    details: [
        {
            name: "Titlebar",
            elements: [
                {
                    title: "Card Title",
                    id: "title"
                }
            ],
            align: "horizontal",
            justify: "first",
            position: "spread",
            groupStyle: {
                background: {
                    colour: "#999999",
                    gradient: []
                },
                border: {
                    colour: "#000000",
                    thickness: 0.2,
                    inset: 0,
                    radius: 0
                },      
                verticalText: "up",
                textColour: "#000000",
            },
            elementStyles: [
                {   
                    background: {
                        colour: "Transparent",
                        gradient: []
                    },
                    border: {
                        colour: "Transparent",
                        thickness: 0,
                        inset: 0,
                        radius: 0
                    },      
                    verticalText: "up",
                    textColour: "#000000",
                }
            ]
        },
        {
            name: "Statsbar",
            elements: [
                {
                    stats: ['0', '1', 'X'],
                    separator: new Character('-'),
                    id: "stats"
                }
            ],
            align: "vertical-right",
            justify: "last",
            position: "end",
            groupStyle: {
                background: {
                    colour: "Transparent",
                    gradient: []
                },
                border: {
                    colour: "Transparent",
                    thickness: 0,
                    inset: 0,
                    radius: 0
                },      
                verticalText: "up",
                textColour: "#000000",
            },
            elementStyles: [
                {   
                    background: {
                        colour: "#333333",
                        gradient: []
                    },
                    border: {
                        colour: "#000000",
                        thickness: 0.2,
                        inset: 0,
                        radius: 0
                    },      
                    verticalText: "down",
                    textColour: "#000000",
                }
            ]
        },
    ]
}

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
    const [showResetWarning, setShowResetWarning] = useState<boolean>(false);

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
    };
    const resetCard = () => {
        setShowResetWarning(true);
    }

    return(
        <div id="component-layout">
            <Header/>
            <div className="main">
                <CONTEXT_symbols.Provider value={useMemo(() => ({symbols: symbols, setSymbols: (symbols: SymbolData[]) => setSymbols([...symbols])}), [symbols])}>
                    <CONTEXT_cardData.Provider value={useMemo(() => ({cardData: cardData, setCardData: setCardData, functions: {setCore, setBorder, setArt, setBody, setFooter, setDetail, deleteDetail, resetCard}}), [cardData])}>
                        <CardPane/>
                        <DesignPane/>
                        <ResetWarning show={showResetWarning} SetShow={(show: boolean) => setShowResetWarning(show)} reset={() => setCardData(init)}/>
                    </CONTEXT_cardData.Provider>
                </CONTEXT_symbols.Provider>
            </div>
            <Footer/>
        </div>
    );
}