import { type SymbolData } from "./Symbol";

import './styles/symbol_editor_icon.css';

interface props_SymbolEditorIcon {
    symbol: SymbolData,
    SetSymbol: Function
}

export default function SymbolEditorIcon({symbol, SetSymbol}: props_SymbolEditorIcon)
{
    return (
        <div id="component-symboleditoricon">
            <form>
                <div className="control">
                    <label htmlFor="editor-icon">Icon:</label>
                    <div className="resettableinput">
                        <input type="file" id="editor-icon" accept=".png" onChange={(e) => SetSymbol({...symbol, icon: URL.createObjectURL(e.target.files![0])})}/>
                        <input type="button" id="editor-icon-reset" value="Remove" onClick={() => SetSymbol({...symbol, icon: ""})}/>
                    </div>
                </div>
            </form>
        </div>
    );
}