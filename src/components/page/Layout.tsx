import { createContext, useState, useMemo } from "react";

import { type SymbolData } from "../symbol_library/Symbol";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

type CardData = {
    cost: SymbolData[]
}

const init: CardData = {
    cost: []
};

export const CONTEXT_cardData: React.Context<{cardData: CardData, setCardData: any}> = createContext({cardData: init, setCardData: undefined});

export default function Layout()
{
    const [cardData, setCardData] = useState<CardData>(init);

    return(
        <div id="component-layout">
            <Header/>
            <div>
                <CONTEXT_cardData.Provider value={useMemo(() => ({cardData, setCardData}), [cardData])}>
                    <CardPane/>
                    <DesignPane/>
                </CONTEXT_cardData.Provider>
            </div>
            <Footer/>
        </div>
    );
}