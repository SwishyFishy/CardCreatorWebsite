import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import { type SymbolData } from "../symbol_library/Symbol";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

import './styles/layout.css';

export type CardData = {
    title: string,
    cost?: SymbolData[],
    art?: string,
    typeline?: string,
    body?: string,
    statsline?: string[],
    set?: SymbolData,
    footer?: string[]
}

const init: CardData = {
    title: "My Card",
    cost: [BasicSymbols[4]],
    body: "Rules text",
    typeline: "Card Type",
    statsline: ["100", "200"],
    footer: ["Designed with CardCreator"]
};

export const CONTEXT_cardData: React.Context<{cardData: CardData, setCardData: any}> = createContext({cardData: init, setCardData: undefined});

export default function Layout()
{
    const [cardData, setCardData] = useState<CardData>(init);

    return(
        <div id="component-layout">
            <Header/>
            <div className="main">
                <CONTEXT_cardData.Provider value={useMemo(() => ({cardData, setCardData}), [cardData])}>
                    <CardPane/>
                    <DesignPane/>
                </CONTEXT_cardData.Provider>
            </div>
            <Footer/>
        </div>
    );
}