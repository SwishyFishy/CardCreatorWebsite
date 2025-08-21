import {v4 as uuid} from 'uuid';

import './styles/symbol.css';

export type SymbolData = {
    colour: string,
    gradient: string,
    useGradient: boolean
    shape: "circle" | "square",
    text?: string,
    textColour?: string,
    icon?: string,
}

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const baseId: string = uuid();

    const symbolColour: string = `linear-gradient(135deg, ${symbol.colour}, ${symbol.useGradient ? symbol.gradient : symbol.colour})`;
    const iconColour: string = symbol.textColour || "black";

    return(
        <div key={baseId} id="component-symbol" className={`symbol-${symbol.shape}`} style={{backgroundImage: symbolColour}}>
            {<span key={`${baseId}sbackground`} style={{color: iconColour, fontSize: symbol.text && symbol.text.length < 2 ? '85%' : '50%'}}>{symbol.icon ? <img key={`${baseId}simage`} src={symbol.icon}/> : symbol.text}</span>}
        </div>
    );
}