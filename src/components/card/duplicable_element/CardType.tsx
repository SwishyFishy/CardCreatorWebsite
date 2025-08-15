import {v4 as uuid} from 'uuid';

export type TypeData = {
    types: string[],
    readonly id?: "type"
}

export default function CardType({types}: TypeData)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className="component-cardtype">
            {types.map((type, index) => (
                <span key={`${baseId}${index}`}>{type}</span>
            ))}
        </div>
    );
}