import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

export type TypeData = {
    types: string[],
    readonly id?: "type"
}

interface props_CardType {
    typeData: TypeData,
    style: DetailStyleCSS
}

export default function CardType({typeData, style}: props_CardType)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className="component-cardtype" style={style}>
            {typeData.types.map((type, index) => (
                <span key={`${baseId}${index}`}>{type}</span>
            ))}
        </div>
    );
}