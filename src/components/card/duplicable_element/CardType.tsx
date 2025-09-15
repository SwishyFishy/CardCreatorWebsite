import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

export type TypeData = {
    types: string[],
    readonly id: "type"
}

interface props_CardType {
    vertical: boolean,
    typeData: TypeData,
    style: DetailStyleCSS
}

import './styles/card_type.css';

export default function CardType({vertical, typeData, style}: props_CardType)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className={`component-cardtype component-carddetail ${vertical ? 'vertical' : ""}`} style={style}>
            {typeData.types.map((type, index) => (
                <span key={`${baseId}${index}`}>{type}</span>
            ))}
        </div>
    );
}