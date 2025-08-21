import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

import './styles/card_title.css';

export type TitleData = {
    title: string,
    readonly id?: "title"
}

interface props_CardTitle {
    vertical: boolean,
    titleData: TitleData,
    style: DetailStyleCSS
}

export default function CardTitle({vertical, titleData, style}: props_CardTitle)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className={`component-cardtitle component-carddetail ${vertical ? 'vertical' : ""}`} style={style}>
            <h2 key={`${baseId}title`}>{titleData.title}</h2>
        </div>
    );
}