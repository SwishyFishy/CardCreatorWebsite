import './styles/save_symbol_button.css';

interface props_SaveSymbolButton {
    Save: Function
}

export default function SaveSymbolButton({Save}: props_SaveSymbolButton)
{
    return (
        <input type="button" id="component-savesymbolbutton" value="Save" onClick={() => Save()}/>
    );
}