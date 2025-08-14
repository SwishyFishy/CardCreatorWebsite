import Symbol, { type SymbolData } from "./Symbol";
import BasicSymbols from "./BasicSymbols";

import './styles/symbol_library.css';

interface props_SymbolLibrary {
    symbols: SymbolData[]
}

export default function SymbolLibrary({symbols}: props_SymbolLibrary)
{
    const library: SymbolData[] = [...BasicSymbols, ...symbols]

    return (
        <div id="component-symbollibrary">
            {library.map((symbol, index) => (
                <Symbol symbol={symbol} key={`symbol${index}`}/>
            ))}
        </div>
    );
}