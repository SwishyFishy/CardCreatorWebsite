import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

import './styles/card_title.css';

export type TitleData = {
    title: string,
    readonly id: "title"
}

interface props_CardTitle {
    alignment: "horizontal" | "vertical-left" | "vertical-right",
    titleData: TitleData,
    style: DetailStyleCSS
}

export default function CardTitle({alignment, titleData, style}: props_CardTitle)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className={`component-cardtitle component-carddetail ${alignment}`} style={style}>
            <h2 key={`${baseId}title`}>{titleData.title}</h2>
        </div>
    );
}