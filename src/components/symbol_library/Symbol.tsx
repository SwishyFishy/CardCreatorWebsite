import {v4 as uuid} from 'uuid';

import { UniversalPropertiesCSS } from '../card/card_types';
import type { UniversalProperties } from '../card/card_types';

import './styles/symbol.css';

export type SymbolData = {
    id: string,
    text?: string,
    textColour: string,
    icon?: string,
} & UniversalProperties

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const baseId: string = uuid();
    
    return(
        <span key={baseId} className="component-symbol" style={{...UniversalPropertiesCSS({background: symbol.background, border: symbol.border})}}>
            {<span key={`${baseId}sbackground`} style={{color: symbol.textColour || "black", fontSize: symbol.text && symbol.text.length < 2 ? '85%' : '50%'}}>{symbol.icon ? <img key={`${baseId}simage`} src={symbol.icon}/> : symbol.text}</span>}
        </span>
    );
}