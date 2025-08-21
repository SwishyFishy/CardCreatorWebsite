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
    const symbolColour: string = `linear-gradient(135deg, ${symbol.colour}, ${symbol.useGradient ? symbol.gradient : symbol.colour})`;
    const iconColour: string = symbol.textColour || "black";

    return(
        <div id="component-symbol" className={`symbol-${symbol.shape}`} style={{backgroundImage: symbolColour}}>
            {<span style={{color: iconColour, fontSize: symbol.text && symbol.text.length < 2 ? '85%' : '50%'}}>{symbol.icon ? <img src={symbol.icon}/> : symbol.text}</span>}
        </div>
    );
}