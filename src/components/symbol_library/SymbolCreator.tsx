import { useState } from 'react';

import CloseButton from '../common/CloseButton';
import PageMask from '../common/PageMask';
import Symbol, {type SymbolData } from './Symbol';
import SymbolCreatorEditor from './SymbolCreatorEditor';
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
        colour: "#ffffff",
        shape: "circle",
        text: "",
        textColour: "#000000",
        icon: ""
    });

    return (
        <div id={show ? "component-symbolcreator": "hidden"}>
            <PageMask/>
            <div className="symbolcreator">
                <CloseButton Close={Hide}/>
                <div className="display">
                    <div className="thumbnail">
                        <h1>Symbol</h1>
                        <Symbol symbol={newSymbol}/>
                    </div>
                    <SymbolCreatorEditor symbol={newSymbol} SetSymbol={setNewSymbol}/>
                </div>
                <SaveSymbolButton Save={() => {
                    Add(newSymbol);
                    Hide();
                    setNewSymbol({
                        colour: "#ffffff",
                        shape: "circle",
                        text: "",
                        textColour: "#000000",
                        icon: ""
                    })
                }}/>
            </div>
        </div>
    );
}