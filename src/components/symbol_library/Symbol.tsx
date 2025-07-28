import './styles/symbol.css';

export type SymbolData = {
    colour: string,
    shape?: "circle" | "square",
    text?: string,
    textColour?: string,
    icon?: string,
}

type SymbolStyle = {
    backgroundColor: string,
    borderRadius?: string,
    transform?: string
}

type IconStyle = {
    color?: string,
    transform?: string
}

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const symbolStyle: SymbolStyle = {
        backgroundColor: symbol.colour,
        borderRadius: symbol.shape == "circle" || symbol.shape == undefined ? "50%" : undefined
    };

    const iconStyle: IconStyle = {
        color: symbol.textColour ? symbol.textColour : "black"
    };

    return(
        <div className="component-symbol" style={symbolStyle}>
            {<span style={iconStyle}>{symbol.icon ? <img src={symbol.icon}/> : symbol.text}</span>}
        </div>
    );
}