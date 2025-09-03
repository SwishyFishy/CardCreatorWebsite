import {v4 as uuid} from 'uuid';

import { GradientCSS } from '../card/card_types';
import type { Gradient } from '../card/card_types';

import './styles/symbol.css';

export type SymbolData = {
    id: string,
    background: Gradient,
    shape: "circle" | "square",
    text?: string,
    textColour: string,
    icon?: string,
}

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const baseId: string = uuid();

    const symbolColour: string = GradientCSS(symbol.background);
    const iconColour: string = symbol.textColour || "black";

    return(
        <span key={baseId} className={`component-symbol symbol-${symbol.shape}`} style={{backgroundImage: symbolColour}}>
            {<span key={`${baseId}sbackground`} style={{color: iconColour, fontSize: symbol.text && symbol.text.length < 2 ? '85%' : '50%'}}>{symbol.icon ? <img key={`${baseId}simage`} src={symbol.icon}/> : symbol.text}</span>}
        </span>
    );
}