import {v4 as uuid} from 'uuid';

import SymbolLibrary from "../symbol_library/SymbolLibrary";
import Symbol from "../symbol_library/Symbol";

import type { SymbolData } from "../symbol_library/Symbol";

import './styles/cost_input.css';

interface props_CostInput {
    cost: SymbolData[],
    SetCost: Function
}

export default function CostInput({cost, SetCost}: props_CostInput)
{
    const baseId: string = uuid();

    return(
        <div className="component-costinput">
            <div className="cost-display">
                {cost.map((symbol, index) => (
                    <span key={`${baseId}${index}`} onClick={(e) => {
                        e.preventDefault();
                        SetCost(cost.toSpliced(index, 1));
                    }}>
                        <Symbol symbol={symbol} key={`${baseId}symbol${index}`}/>
                    </span>
                ))}
            </div>
            <SymbolLibrary InsertSymbol={(e: any, symbol: SymbolData) => {
                e.preventDefault();
                SetCost([...cost, symbol]);
            }}/>
        </div>
    );
}