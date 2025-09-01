import SymbolCreatorButton from "./SymbolCreatorButton";
import Symbol, { type SymbolData } from "./Symbol";
import BasicSymbols from "./BasicSymbols";

import './styles/symbol_library.css';

interface props_SymbolLibrary {
    symbols: SymbolData[],
    ShowCreator: Function
}

export default function SymbolLibrary({symbols, ShowCreator}: props_SymbolLibrary)
{
    const library: SymbolData[] = [...BasicSymbols, ...symbols]

    return (
        <div id="component-symbollibrary">
            {library.map((symbol, index) => (
                <Symbol symbol={symbol} key={`symbol${index}`}/>
            ))}
            <SymbolCreatorButton Show={ShowCreator}/>
        </div>
    );
}