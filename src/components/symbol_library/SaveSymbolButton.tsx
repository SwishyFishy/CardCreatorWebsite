import './styles/save_symbol_button.css';

interface props_SaveSymbolButton {
    Save: Function
}

export default function SaveSymbolButton({Save}: props_SaveSymbolButton)
{
    return (
        <div id="component-savesymbolbutton">
            <input type="button" value="Save Symbol" onClick={() => Save()}/>
        </div>
    );
}