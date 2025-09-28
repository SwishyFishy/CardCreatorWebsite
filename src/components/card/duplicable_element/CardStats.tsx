import {v4 as uuid} from 'uuid';

import { Character } from '../card_types';
import type { DetailStyleCSS } from './CardDetailBlock';

import './styles/card_stats.css';

export type StatsData = {
    stats: string[],
    separator: Character
    readonly id: "stats"
}

interface props_CardStats {
    alignment: "horizontal" | "vertical-left" | "vertical-right",
    statsData: StatsData,
    style: DetailStyleCSS
}

export default function CardStats({alignment, statsData, style}: props_CardStats)
{
    const baseId: string = uuid();

    return(
        <div className={`component-cardstats component-carddetail ${alignment}`} style={style}>
            {statsData.stats.map((stat, index) => (
                <>
                    <span key={`${baseId}${index}`}>{stat}</span>
                    {index < statsData.stats.length - 1 ? <span key={`${baseId}separator${index}`} className="separator">{statsData.separator.value}</span> : ""}
                </>
            ))}
        </div>
    );
}