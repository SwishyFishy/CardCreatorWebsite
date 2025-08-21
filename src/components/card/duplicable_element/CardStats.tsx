import {v4 as uuid} from 'uuid';

import type { DetailStyleCSS } from './CardDetailBlock';

export type StatsData = {
    stats: string[],
    readonly id?: "stats"
}

interface props_CardStats {
    statsData: StatsData,
    style: DetailStyleCSS
}

export default function CardStats({statsData, style}: props_CardStats)
{
    const baseId: string = uuid();

    return(
        <div className="component-cardstats" style={style}>
            {statsData.stats.map((stat, index) => (
                <span key={`${baseId}${index}`}>{stat}</span>
            ))}
        </div>
    );
}