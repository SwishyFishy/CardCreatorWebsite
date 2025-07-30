import { type SymbolData } from "./Symbol"

interface props_SymbolCreatorEditor {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolCreatorEditor({symbol, SetSymbol}: props_SymbolCreatorEditor)
{
    const thing: any = {symbol, SetSymbol};
    return (
        <div id="component-symbolcreatoreditor">
            <form>
                <input type="color"/>
                
            </form>
        </div>
    )
}