import './styles/colour_input.css';

interface props_ColourInput {
    id: string,
    value: string,
    SetColour: Function
}

export default function ColourInput({id, value, SetColour}: props_ColourInput)
{
    return (
        <div className="component-colourinput">
            {/* Regex matches any 6-digit hex code */}
            <input type="text" className={value.match(/^#(\d|[a-fA-F]){6}$/) || value == "Transparent" ? "" : "invalid"} value={value} onChange={(e) => SetColour(e)}/>
            <input type="color" className="transparent" id={id} value={value} onChange={(e) => SetColour(e)}/>
            <input type="button" value="Transparent" onClick={(e) => SetColour(e)}/>
        </div>
    );
}