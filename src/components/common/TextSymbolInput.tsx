import { useState } from "react"

import SymbolLibrary from "../symbol_library/SymbolLibrary";

import './styles/text_symbol_input.css';

interface props_TextSymbolInput {
    id: string,
    value: string,
    SetText: Function
}

export default function TextSymbolInput({id, value, SetText}: props_TextSymbolInput)
{
    return(
        <div className="component-textsymbolinput">
            <textarea id={id} rows={5} value={value} onChange={(e) => SetText(e)}/>
            <div className="input-symbol">
                <SymbolLibrary/>
            </div>
        </div>
    );
}