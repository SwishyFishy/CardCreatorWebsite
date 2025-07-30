import { type SymbolData } from "./Symbol"

interface props_SymbolCreatorEditor {
    symbol: SymbolData,
    Edit: Function
}

export default function SymbolCreatorEditor({symbol, Edit}: props_SymbolCreatorEditor)
{
    return (
        <div id="component-symbolcreatoreditor">
            <form>
                form content
            </form>
        </div>
    )
}