import { createContext, useState, useMemo } from "react";

import BasicSymbols from "../symbol_library/BasicSymbols";
import { type CardData } from "../card/card_types";

import Header from "./Header";
import Footer from "./Footer";
import CardPane from "./CardPane";
import DesignPane from "./DesignPane";

import testArt from '../../assets/test/Necrolemur.jpg';

import './styles/layout.css';

const init: CardData = {
    border: {
        colour: "black"
    },
    title: "My Card",
    cost: [BasicSymbols[4]],
    art: {                          /*Remove from default in final product*/
        src: testArt,
        dominance: 50,
        fullart: false,
        vShift: 0,
        hShift: 0,
        zoom: 100
    },
    body: {
        content: ["Rules", "text"],
        colour: "#666666",
        opacity: .75
    },
    typeline: ["Card Type"],
    statsline: ["abc", "123"],
    footer: {
        year: new Date().getFullYear(),
        set: "set",
        collector: "000/000",
        artistCredit: "credit the artist",
        siteCredit: "Designed with CardCreator",
        licence: "CC/BY-SA 4.0"
    }
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