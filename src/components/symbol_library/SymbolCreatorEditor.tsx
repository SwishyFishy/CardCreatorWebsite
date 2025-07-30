import { type SymbolData } from "./Symbol"

interface props_SymbolCreatorEditor {
    symbol: SymbolData
}

export default function SymbolCreatorEditor({symbol}: props_SymbolCreatorEditor)
{
    return (
        <div id="component-symbolcreatoreditor">
            <form>
                form content
            </form>
        </div>
    )
}