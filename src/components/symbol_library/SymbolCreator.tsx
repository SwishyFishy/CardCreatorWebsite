import { useState } from 'react';

import Symbol, {type SymbolData } from './Symbol';

interface props_SymbolCreator {
    show: boolean,
    Add: Function,
    Hide: Function
}

export default function SymbolCreator({show, Add, Hide}: props_SymbolCreator)
{
    const [newSymbol, setNewSymbol] = useState<SymbolData>({
        colour: "white",
        shape: "circle",
        text: ""
    });

    return (
        <div className={show ? "component-symbolcreator": "hidden"}>
            <input type="button" id="symbolcreatorclose" value="X" onClick={() => Hide()}/>
            <div className="display">
                <Symbol symbol={newSymbol}/>
                <form className="editor">

                </form>
            </div>
            <input type="button" id="addnewsymbol" value="Save Symbol" onClick={() => Add(newSymbol)}/>
        </div>
    );
}