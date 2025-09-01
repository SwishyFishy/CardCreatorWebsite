import { useState } from "react"

import SymbolLibraryPane from "../symbol_library/SymbolLibraryPane"

import './styles/text_symbol_input.css';

interface props_TextSymbolInput {
    id: string,
    value: string,
    SetText: Function
}

export default function TextSymbolInput({id, value, SetText}: props_TextSymbolInput)
{
    const [showSymbols, setShowSymbols] = useState<boolean>(false);

    return(
        <div className="component-textsymbolinput">
            <textarea id={id} rows={5} value={value} onChange={(e) => SetText(e)}/>
            <div className="input-symbol">
                <input type="button" className="add-symbol" value={`${showSymbols ? "Close" : "Add Symbol"}`} onClick={() => {setShowSymbols(!showSymbols)}}/>
                <div className={`input-symbol-library ${showSymbols ? "visible" : "hidden"}`}>
                    <SymbolLibraryPane/>
                </div>
            </div>
        </div>
    );
}