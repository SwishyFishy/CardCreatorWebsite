import { useState } from "react";

import Control from "../common/Control.tsx";
import { type SymbolData } from "./Symbol";

import symbols from "../../assets/icons/icons.ts";

import './styles/symbol_editor_icon.css';

interface props_SymbolEditorIcon {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolEditorIcon({symbol, SetSymbol}: props_SymbolEditorIcon)
{
    const [symbolLibrary, setSymbolLibrary] = useState<string[]>(Object.values(symbols));

    return (
        <div id="component-symboleditoricon">
            <form>
                <h1>Icons</h1>
                <div>
                    {symbolLibrary.map((image, index) => (
                        <input type="image" key={index} src={image} onClick={(e) => {e.preventDefault(); SetSymbol({...symbol, icon: image})}}/>
                    ))}
                </div>

                <Control>
                    <label htmlFor="editor-icon">Import:</label>
                    <input type="file" id="editor-icon" accept=".png" onChange={(e) => setSymbolLibrary([...symbolLibrary, URL.createObjectURL(e.target.files![0])])}/>
                </Control>
                
                <input type="button" id="editor-icon-reset" value="Remove Icon" onClick={() => SetSymbol({...symbol, icon: ""})}/>
            </form>
        </div>
    );
}