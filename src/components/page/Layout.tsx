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
        {elements: [{title: "Card Title", id: "title"}, {cost: [BasicSymbols[4], BasicSymbols[14], BasicSymbols[16]], id: "cost"}],     align: "horizontal",    justify: "first"},
        {elements: [{types: ["Card", "Type"], id: "type"}],                                                                             align: "horizontal",    justify: "middle"},
        {elements: [{stats: ["Card", "Stats"], id: "stats"}],                                                                           align: "horizontal",    justify: "last"},
        {elements: [{types: ["vLeft", "first"], id: "type"}], align: "vertical-left", justify:"first"},
        {elements: [{types: ["vLeft", "last"], id: "type"}], align: "vertical-left", justify:"last"},
        {elements: [{types: ["vLeft", "middle"], id: "type"}], align: "vertical-left", justify:"middle"},
        {elements: [{types: ["vRight", "first"], id: "type"}], align: "vertical-right", justify:"first"},
        {elements: [{types: ["vRight", "last"], id: "type"}], align: "vertical-right", justify:"last"},
        {elements: [{types: ["vRight", "middle"], id: "type"}], align: "vertical-right", justify:"middle"},
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