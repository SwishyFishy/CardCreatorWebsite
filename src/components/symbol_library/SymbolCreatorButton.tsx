interface props_SymbolCreatorButton {
    Show: Function
}

export default function SymbolCreatorButton({Show}: props_SymbolCreatorButton)
{
    return (
        <div className="component-symbolcreatorbutton">
            <label htmlFor="symbolcreatoropen" className="hidden">Button: Create a symbol</label>
            <input type="button" id="symbolcreatoropen" value="+" onClick={() => Show()}/>
        </div>
    );
}