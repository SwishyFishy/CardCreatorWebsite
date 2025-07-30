import { type SymbolData } from "./Symbol"

interface props_SymbolCreatorEditor {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolCreatorEditor({symbol, SetSymbol}: props_SymbolCreatorEditor)
{
    return (
        <div id="component-symbolcreatoreditor">
            <form>
                <label htmlFor="editor-colour">Colour:</label>
                <input type="color" id="editor-colour" value={symbol.colour} onChange={(e) => SetSymbol({...symbol, colour: e.target.value})}/>
                <label htmlFor="editor-shape">Shape:</label>
                <select id="editor-shape" value={symbol.shape} onChange={(e) => SetSymbol({...symbol, shape: e.target.value})}>
                    <option value="circle">Circle</option>
                    <option value="square">Square</option>
                </select>
                <label htmlFor="editor-text">Icon:</label>
                <input type="text" id="editor-text" value={symbol.text} onChange={(e) => SetSymbol({...symbol, text: e.target.value})}/>                
            </form>
        </div>
    )
}