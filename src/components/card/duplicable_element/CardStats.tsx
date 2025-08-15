import {v4 as uuid} from 'uuid';

export type StatsData = {
    stats: string[],
    readonly id?: "stats"
}

export default function CardStats({stats}: StatsData)
{
    const baseId: string = uuid();

    return(
        <div className="component-cardstats">
            {stats.map((stat, index) => (
                <span key={`${baseId}${index}`}>{stat}</span>
            ))}
        </div>
    );
}