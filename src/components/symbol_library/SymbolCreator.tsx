import { useState } from 'react';

import CloseCreatorButton from './CloseCreatorButton';
import PageMask from '../common/PageMask';
import Symbol, {type SymbolData } from './Symbol';
import SymbolEditorBase from './SymbolEditorBase';
import SymbolEditorIcon from "./SymbolEditorIcon"
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
        background: {
            colour: "#ffffff",
            gradient: [],
        },
        shape: "circle",
        text: "",
        textColour: "#000000",
        icon: ""
    });

    return (
        <div id={show ? "component-symbolcreator": "hidden"}>
            <PageMask/>
            <div className="symbolcreator">
                <CloseCreatorButton Close={Hide}/>
                <div className="display">
                    <div className="thumbnail">
                        <h1>Symbol</h1>
                        <Symbol symbol={newSymbol}/>
                    </div>
                    <SymbolEditorBase symbol={newSymbol} SetSymbol={setNewSymbol}/>
                    <SymbolEditorIcon symbol={newSymbol} SetSymbol={setNewSymbol}/>
                </div>
                <SaveSymbolButton Save={() => {
                    Add(newSymbol);
                    Hide();
                    setNewSymbol({
                        background: {
                            colour: "#ffffff",
                            gradient: [],
                        },
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