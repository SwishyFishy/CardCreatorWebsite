import {v4 as uuid} from 'uuid';

import { useState } from 'react';

import SymbolLibrary from "../symbol_library/SymbolLibrary";
import type { SymbolData } from "../symbol_library/Symbol";

import './styles/text_symbol_input.css';

interface props_TextSymbolInput {
    value: string,
    SetText: Function
}

export default function TextSymbolInput({value, SetText}: props_TextSymbolInput)
{
    const [id] = useState<string>(uuid())[0];
    const self: HTMLInputElement = document.getElementById(id)! as HTMLInputElement;

    const handleAddSymbol = (e: any, symbol: SymbolData): void => {
        e.preventDefault();
        const position = self.selectionStart;
        if (position)
        {
            // Insert the symbol id
            self.value = self.value.slice(0, position).concat(`{${symbol.id}}`).concat(self.value.slice(position));
            
            // Refocus the textarea, and put the cursor at its previous position + the length of the inserted symbol's id.
            self.focus();
            self.selectionStart = self.selectionEnd = position + symbol.id.length + 2;
            
            // Since SetText accepts e: any, construct a 'fake' event object with a .target.value structure
            // Required to make the card update when a symbol is selected
            // Will break if JS changes the structure of Event objects.
            SetText({target: {value: self.value}});
        }
    }

    return(
        <div className="component-textsymbolinput">
            <textarea id={id} rows={5} value={value} onChange={(e) => SetText(e)}/>
            <div className="input-symbol">
                <SymbolLibrary InsertSymbol={handleAddSymbol}/>
            </div>
        </div>
    );
}