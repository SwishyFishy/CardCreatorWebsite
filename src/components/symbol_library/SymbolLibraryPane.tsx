import { useState } from "react";

import { type SymbolData } from "./Symbol";

import SymbolLibrary from "./SymbolLibrary";
import SymbolCreator from "./SymbolCreator";
import SymbolCreatorButton from "./NewSymbolButton";

import './styles/symbol_library_pane.css';

export default function SymbolLibraryPane()
{
    const [symbols, setSymbols] = useState<SymbolData[]>([]);
    const [showCreator, setShowCreator] = useState<boolean>(false);

    const AddSymbol = (symbol: SymbolData): void => {
        setSymbols([...symbols, symbol]);
    }

    const ShowCreator = (): void => {
        setShowCreator(true);
    }

    const HideCreator = (): void => {
        setShowCreator(false);
    }

    return (
        <div id="component-symbollibrarypane">
            <div className="visible">
                <SymbolLibrary symbols={symbols}/>
                <SymbolCreatorButton Show={ShowCreator}/>
            </div>
            <SymbolCreator show={showCreator} Add={AddSymbol} Hide={HideCreator}/>
        </div>
    );
}