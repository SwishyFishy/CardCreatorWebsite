import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

export type TypeData = {
    types: string[],
    readonly id: "type"
}

interface props_CardType {
    alignment: "horizontal" | "vertical-left" | "vertical-right",
    typeData: TypeData,
    style: DetailStyleCSS
}

import './styles/card_type.css';

export default function CardType({alignment, typeData, style}: props_CardType)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className={`component-cardtype component-carddetail ${alignment}`} style={style}>
            {typeData.types.map((type, index) => (
                <span key={`${baseId}${index}`}>{type}</span>
            ))}
        </div>
    );
}