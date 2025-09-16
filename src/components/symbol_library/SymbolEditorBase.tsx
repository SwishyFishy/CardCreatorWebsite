import Control from "../common/Control";
import ControlUniversalProperties from "../common/ControlUniversalProperties";
import ColourInput from "../common/ColourInput";
import CharacterLimitedInput from "../common/CharacterLimitedInput";

import { type SymbolData } from "./Symbol";
import type { Gradient, Border } from "../card/card_types";

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
                <ControlUniversalProperties data={{background: symbol.background, border: symbol.border}} SetData={(newBG: Gradient, newBorder: Border ) => SetSymbol({...symbol, background: newBG, border: newBorder})}/>
                <Control>
                    <label>Text:</label>
                    <CharacterLimitedInput limit={2} limitStyle="replace" text={symbol.text || ""} SetText={(newText: string) => SetSymbol({...symbol, text: newText.toUpperCase()})}/>
                </Control>
                <Control>
                    <label>Text Colour:</label>
                    <ColourInput value={symbol.textColour} SetColour={(e: any) => SetSymbol({...symbol, textColour: e.target.value})}/>
                </Control>
            </form>
        </div>
    )
}