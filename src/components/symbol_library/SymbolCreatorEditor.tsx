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
                form content
            </form>
        </div>
    )
}