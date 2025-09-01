interface props_SymbolCreatorButton {
    Show: Function
}

import './styles/symbol_creator_button.css';

export default function SymbolCreatorButton({Show}: props_SymbolCreatorButton)
{
    return (
        <div id="component-symbolcreatorbutton">
            <input type="button" value="New Symbol" onClick={() => Show()}/>
        </div>
    );
}