import SymbolLibrary from "./SymbolLibrary";
import SymbolCreator from "./SymbolCreator";

export default function SymbolLibraryPane()
{
    return (
        <div className="component-symbollibrarypane">
            <SymbolLibrary/>
            <SymbolCreator/>
        </div>
    );
}