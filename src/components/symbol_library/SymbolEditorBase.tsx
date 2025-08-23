import Control from "../common/Control";
import ColourPickerDisplay from "../common/ColourPickerDisplay";
import { type SymbolData } from "./Symbol";

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
                <Control>
                    <label htmlFor="editor-shape">Shape:</label>
                    <select id="editor-shape" value={symbol.shape} onChange={(e) => SetSymbol({...symbol, shape: e.target.value})}>
                        <option value="circle">Circle</option>
                        <option value="square">Square</option>
                    </select>
                </Control>
                <Control>
                    <label htmlFor="editor-colour">Colour:</label>
                    <ColourPickerDisplay id="editor-colour" value={symbol.colour} SetColour={(e: any) => SetSymbol({...symbol, colour: e.target.value})}/>
                </Control>
                <Control>
                    <label htmlFor="editor-gradient">Gradient:</label>
                    <Control>
                        <input type="checkbox" id="editor-gradient-enable" checked={symbol.useGradient} onChange={() => SetSymbol({...symbol, useGradient: !symbol.useGradient})}/>
                        <ColourPickerDisplay id="editor-gradient" value={symbol.gradient} SetColour={(e: any) => SetSymbol({...symbol, gradient: e.target.value})}/>
                    </Control>
                </Control>
                <Control>
                    <label htmlFor="editor-text">Text:</label>
                    <input type="text" id="editor-text" value={symbol.text} onChange={(e) => SetSymbol({...symbol, text: e.target.value.slice(-2).toUpperCase()})}/>
                </Control>
                <Control>
                    <label htmlFor="editor-text-colour">Colour:</label>
                    <ColourPickerDisplay id="editor-text-colour" value={symbol.textColour} SetColour={(e: any) => SetSymbol({...symbol, textColour: e.target.value})}/>
                </Control>
            </form>
        </div>
    )
}