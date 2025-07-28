interface props_SymbolCreator {
    show: boolean,
    Hide: Function
}

export default function SymbolCreator({show, Hide}: props_SymbolCreator)
{
    return (
        <div className={show ? "component-symbolcreator": "hidden"}>
            <p>Creator</p>
        </div>
    );
}