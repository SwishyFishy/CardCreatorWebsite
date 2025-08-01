import { type SymbolData } from "./Symbol"

import './styles/symbol_editor_base.css'

interface props_SymbolEditorBase {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolEditorBase({symbol, SetSymbol}: props_SymbolEditorBase)
{
    return (
        <div id="component-symboleditorbase">
            <form>
                <div className="control">
                    <label htmlFor="editor-shape">Shape:</label>
                    <select id="editor-shape" value={symbol.shape} onChange={(e) => SetSymbol({...symbol, shape: e.target.value})}>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                    </select>
                </div>
                <div className="control">
                    <label htmlFor="editor-colour">Colour:</label>
                    <input type="color" id="editor-colour" value={symbol.colour} onChange={(e) => SetSymbol({...symbol, colour: e.target.value})}/>
                </div>
                <div className="control">
                    <label htmlFor="editor-text">Text:</label>
                    <input type="text" id="editor-text" value={symbol.text} onChange={(e) => {SetSymbol({...symbol, text: e.target.value.slice(-2).toUpperCase()})}}/>
                </div>
                <div className="control">    
                    <label htmlFor="editor-text-colour">Colour:</label>
                    <input type="color" id="editor-text-colour" value={symbol.textColour} onChange={(e) => SetSymbol({...symbol, textColour: e.target.value})}/>
                </div>    
            </form>
        </div>
    )
}