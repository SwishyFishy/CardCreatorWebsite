interface props_SymbolCreatorButton {
    Show: Function
}

export default function SymbolCreatorButton({Show}: props_SymbolCreatorButton)
{
    return (
        <div id="component-newsymbolbutton">
            <input type="button" value="+" onClick={() => Show()}/>
        </div>
    );
}