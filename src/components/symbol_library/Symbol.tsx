import './styles/symbol.css';

export type SymbolData = {
    shape: "circle" | "square" | "rhombus",
    colour: string,
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
    color?: string
}

interface props_Symbol {
    symbol: SymbolData
}

export default function Symbol({symbol}: props_Symbol)
{
    const symbolStyle: SymbolStyle = {
        backgroundColor: symbol.colour,
        borderRadius: symbol.shape == "circle" ? "50%" : undefined,
        transform: symbol.shape == "rhombus" ? "rotateZ(45)" : undefined
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