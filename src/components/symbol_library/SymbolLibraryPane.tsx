import { useState } from "react";

import { type SymbolData } from "./Symbol";

import SymbolLibrary from "./SymbolLibrary";
import SymbolCreator from "./SymbolCreator";
import SymbolCreatorButton from "./NewSymbolButton";

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
        <div className="component-symbollibrarypane">
            <SymbolLibrary symbols={symbols}/>
            <SymbolCreatorButton Show={ShowCreator}/>
            <SymbolCreator show={showCreator} Add={AddSymbol} Hide={HideCreator}/>
        </div>
    );
}