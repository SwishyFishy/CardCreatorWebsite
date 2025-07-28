import { useState } from "react";

import SymbolLibrary from "./SymbolLibrary";
import SymbolCreator from "./SymbolCreator";
import SymbolCreatorButton from "./SymbolCreatorButton";

type Symbol = {
    shape: "circle" | "square" | "rhombus",
    colour: string,
    icon?: string,
    iconColour?: string
}

export default function SymbolLibraryPane()
{
    const [symbols, setSymbols] = useState<Symbol[]>([]);
    const [showCreator, setShowCreator] = useState<boolean>(false);

    const AddSymbol = (symbol: Symbol): void => {
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
            <SymbolLibrary/>
            <SymbolCreatorButton Show={ShowCreator}/>
            <SymbolCreator show={showCreator} Hide={HideCreator}/>
        </div>
    );
}