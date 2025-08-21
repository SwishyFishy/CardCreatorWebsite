import {v4 as uuid} from 'uuid';

import './styles/card_title.css';

export type TitleData = {
    title: string,
    readonly id?: "title"
}

export default function CardTitle({title}: TitleData)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className="component-cardtitle">
            <h2 key={`${baseId}title`}>{title}</h2>
        </div>
    );
}