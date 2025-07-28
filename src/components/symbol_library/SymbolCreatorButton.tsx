interface props_SymbolCreatorButton {
    Show: Function
}

export default function SymbolCreatorButton({Show}: props_SymbolCreatorButton)
{
    return (
        <div className="component-symbolcreatorbutton">
            <label htmlFor="button" className="hidden">Button: Create a symbol</label>
            <input type="button" id="button" value="+" onClick={() => Show()}/>
        </div>
    );
}