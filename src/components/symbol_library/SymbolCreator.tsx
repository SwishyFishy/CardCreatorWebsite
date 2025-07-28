import { useState } from 'react';

import Symbol, {type SymbolData } from './Symbol';

interface props_SymbolCreator {
    show: boolean,
    Add: Function,
    Hide: Function
}

export default function SymbolCreator({show, Add, Hide}: props_SymbolCreator)
{
    const [newSymbol, setNewSymbol] = useState<SymbolData>();

    return (
        <div className={show ? "component-symbolcreator": "hidden"}>
            <input type="button" id="symbolcreatoreclose" value="X" onClick={() => Hide()}/>
            <input type="button" id="addnewsymbol" value="Save Symbol" onClick={() => Add(newSymbol)}/>
        </div>
    );
}