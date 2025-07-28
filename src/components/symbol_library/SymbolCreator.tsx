import Symbol, {type SymbolData } from './Symbol';

interface props_SymbolCreator {
    show: boolean,
    Add: Function,
    Hide: Function
}

export default function SymbolCreator({show, Add, Hide}: props_SymbolCreator)
{
    return (
        <div className={show ? "component-symbolcreator": "hidden"}>
            <p>Creator</p>
        </div>
    );
}