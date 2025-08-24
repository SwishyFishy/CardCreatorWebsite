import './styles/colour_input.css';

interface props_ColourInput {
    id: string,
    value: string | undefined,
    SetColour: Function
}

export default function ColourInput({id, value, SetColour}: props_ColourInput)
{
    return (
        <div className="component-colourinput">
            <input type="text" id={`${id}-hex`} value={value} onChange={(e) => SetColour(e)}/>
            <input type="color" id={id} value={value} onChange={(e) => SetColour(e)}/>
        </div>
    );
}