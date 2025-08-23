import './styles/colour_picker_display.css';

interface props_ColourPickerDisplay {
    id: string,
    value: string | undefined,
    SetColour: Function
}

export default function ColourPickerDisplay({id, value, SetColour}: props_ColourPickerDisplay)
{
    return (
        <div className="component-colourpickerdisplay">
            <input type="text" id={`${id}-hex`} value={value} onChange={(e) => SetColour(e)}/>
            <input type="color" id={id} value={value} onChange={(e) => SetColour(e)}/>
        </div>
    );
}