import { type SymbolData } from "./Symbol"

import './styles/symbol_creator_editor.css'

interface props_SymbolCreatorEditor {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolCreatorEditor({symbol, SetSymbol}: props_SymbolCreatorEditor)
{
    return (
        <div id="component-symbolcreatoreditor">
            <form>
                <div>
                    <label htmlFor="editor-shape">Shape:</label>
                    <select id="editor-shape" value={symbol.shape} onChange={(e) => SetSymbol({...symbol, shape: e.target.value})}>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="editor-colour">Colour:</label>
                    <input type="color" id="editor-colour" value={symbol.colour} onChange={(e) => SetSymbol({...symbol, colour: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="editor-text">Text:</label>
                    <input type="text" id="editor-text" value={symbol.text} onChange={(e) => {SetSymbol({...symbol, text: e.target.value.slice(-2)}); }}/>
                </div>
                <div>    
                    <label htmlFor="editor-text-colour">Colour:</label>
                    <input type="color" id="editor-text-colour" value={symbol.textColour} onChange={(e) => SetSymbol({...symbol, textColour: e.target.value})}/>
                </div>       
            </form>
        </div>
    )
}