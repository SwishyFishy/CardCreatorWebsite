import { useState } from 'react';

import CloseButton from '../common/CloseButton';
import Symbol, {type SymbolData } from './Symbol';

import './styles/symbol_creator.css';

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
        <div id={show ? "component-symbolcreator": "hidden"}>
            <CloseButton Close={Hide}/>
            <div className="display">
                <Symbol symbol={newSymbol}/>
                <form className="editor">
                    form content
                </form>
            </div>
            <input type="button" id="symbolcreatorsave" value="Save Symbol" onClick={() => Add(newSymbol)}/>
        </div>
    );
}