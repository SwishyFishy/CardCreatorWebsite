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
    const symbolColour: string = `linear-gradient(135deg, ${symbol.colour}, ${symbol.gradient})`;
    const iconColour: string = symbol.textColour || "black";

    return(
        <div id="component-symbol" className={`symbol-${symbol.shape}`} style={symbol.useGradient ? {backgroundImage: symbolColour} : {backgroundColor: symbol.colour}}>
            {<span style={{color: iconColour, fontSize: symbol.text && symbol.text.length < 2 ? '.8rem' : '.5rem'}}>{symbol.icon ? <img src={symbol.icon}/> : symbol.text}</span>}
        </div>
    );
}