import { useState, useContext } from "react";
import {v4 as uuid} from 'uuid';

import SymbolCreatorButton from "./SymbolCreatorButton";
import SymbolCreator from "./SymbolCreator";
import Symbol, { type SymbolData } from "./Symbol";

import { CONTEXT_symbols } from "../page/Layout";

import './styles/symbol_library.css';

interface props_SymbolLibrary {
    InsertSymbol: Function
}

export default function SymbolLibrary({InsertSymbol}: props_SymbolLibrary)
{
    const GenerateDefaultSymbol = (): SymbolData => {
        return({
            id: uuid().substring(0, 6),
            background: {
                colour: "#ffffff",
                gradient: [],
            },
            border: {
                colour: "transparent",
                thickness: 0,
                radius: 50,
                inset: 0
            },
            text: "+",
            textColour: "#000000",
            icon: ""
        });
    }

    const symbols: SymbolData[] = useContext(CONTEXT_symbols).symbols;
    const setSymbols: Function = useContext(CONTEXT_symbols).setSymbols!;

    const [showCreator, setShowCreator] = useState<boolean>(false);
    const [creatorSymbol, setCreatorSymbol] = useState<SymbolData>(GenerateDefaultSymbol());

    const AddSymbol = (symbol: SymbolData): void => {
        const index: number = symbols.findIndex((s) => s.id == symbol.id);
        if (index > -1)
        {
            setSymbols(symbols.toSpliced(symbols.findIndex((s) => s.id == symbol.id), 1, symbol));
        }
        else
        {
            setSymbols([...symbols, symbol]);
        }
    }

    const ShowCreator = (initial: SymbolData): void => {
        setCreatorSymbol({...initial});
        setShowCreator(true);
    }

    const HideCreator = (): void => {
        setShowCreator(false);
    }

    const handleEditSymbol = (e: any, symbol: SymbolData) => {
        e.preventDefault();
        ShowCreator(symbol);
    }

    return (
        <div id="component-symbollibrary">
            {symbols.map((symbol, index) => (
                <span key={`symbol${index}container`} onContextMenu={(e) => handleEditSymbol(e, symbol)} onClick={(e) => InsertSymbol(e, symbol)}>
                    <Symbol symbol={symbol} key={`symbol${index}`}/>
                </span>
            ))}
            <SymbolCreatorButton Show={() => ShowCreator(GenerateDefaultSymbol())}/>
            <SymbolCreator show={showCreator} symbol={creatorSymbol} SetSymbol={setCreatorSymbol} Save={AddSymbol} Hide={HideCreator}/>
        </div>
    );
}