import './styles/colour_input.css';

interface props_ColourInput {
    id: string,
    value: `#${number}${number}${number}${number}${number}${number}` | "none",
    SetColour: Function
}

export default function ColourInput({id, value, SetColour}: props_ColourInput)
{
    return (
        <div className="component-colourinput">
            <input type="text" value={value} onChange={(e) => SetColour(e)}/>
            <input type="color" className="transparent" id={id} value={value} onChange={(e) => SetColour(e)}/>
            <input type="button" value="Transparent" onClick={(e) => SetColour(e)}/>
        </div>
    );
}