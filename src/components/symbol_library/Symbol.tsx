import './styles/symbol.css';

export type SymbolData = {
    colour: string,
    shape: "circle" | "square",
    gradient?: string,
    text?: string,
    textColour?: string,
    icon?: string,
}

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const symbolColour: string = `linear-gradient(135deg, ${symbol.colour}, ${symbol.gradient})`;
    const iconColour: string = symbol.textColour || "black";

    return(
        <div id="component-symbol" className={`symbol-${symbol.shape}`} style={{backgroundImage: symbolColour, backgroundColor: symbol.colour}}>
            {<span style={{color: iconColour}}>{symbol.icon ? <img src={symbol.icon}/> : symbol.text}</span>}
        </div>
    );
}