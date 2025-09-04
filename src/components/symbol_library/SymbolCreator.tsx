import CloseCreatorButton from './CloseCreatorButton';
import PageMask from '../common/PageMask';
import Symbol, {type SymbolData } from './Symbol';
import SymbolEditorBase from './SymbolEditorBase';
import SymbolEditorIcon from "./SymbolEditorIcon"
import SaveSymbolButton from './SaveSymbolButton';

import './styles/symbol_creator.css';

interface props_SymbolCreator {
    show: boolean, 
    symbol: SymbolData,
    SetSymbol: Function,
    Save: Function,
    Hide: Function
}

export default function SymbolCreator({show, symbol, SetSymbol, Save, Hide}: props_SymbolCreator)
{
    console.log(symbol);

    return (
        <div id={show ? "component-symbolcreator": "hidden"}>
            <PageMask/>
            <div className="symbolcreator">
                <CloseCreatorButton Close={Hide}/>
                <div className="display">
                    <div className="thumbnail">
                        <h1>Symbol</h1>
                        <Symbol symbol={symbol}/>
                    </div>
                    <SymbolEditorBase symbol={symbol} SetSymbol={SetSymbol}/>
                    <SymbolEditorIcon symbol={symbol} SetSymbol={SetSymbol}/>
                </div>
                <SaveSymbolButton Save={() => {
                    Save(symbol);
                    Hide();
                }}/>
            </div>
        </div>
    );
}