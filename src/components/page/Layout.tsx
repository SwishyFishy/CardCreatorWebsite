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
    art: {
        src: testArt,           /*Remove from default in final product*/
        dominance: 50,
        fullart: false,
        vShift: 0,
        hShift: 0,
        zoom: 100
    },
    body: {
        content: ["Rules", "text"],
        colour: "#120fb6ff",
        gradient: "#d31414ff",
        useGradient: true,
        opacity: 1
    },
    footer: {
        year: new Date().getFullYear(),
        set: "set",
        collector: "000/000",
        artistCredit: "credit the artist",
        siteCredit: "Designed with CardCreator",
        licence: "CC/BY-SA 4.0"
    },
    details: [              /*Remove from default in final product*/
        {elements: ["Card Title", [BasicSymbols[4]]],   position: "top"},
        {elements: [["Card", "Type"]],                  position: "middle"},
        {elements: [["Card", "Stats"]],                 position: "bottom"}
    ]
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