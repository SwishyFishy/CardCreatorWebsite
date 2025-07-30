import { useState } from 'react';

import CloseButton from '../common/CloseButton';
import Symbol, {type SymbolData } from './Symbol';
import SaveSymbolButton from './SaveSymbolButton';

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
        text: "",
        textColour: "black",
        icon: ""
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
            <SaveSymbolButton Save={() => {
                Add(newSymbol); 
                Hide();
            }}/>
        </div>
    );
}