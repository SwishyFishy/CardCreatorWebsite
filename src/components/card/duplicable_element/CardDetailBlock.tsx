import {v4 as uuid} from 'uuid';

import CardDetail from './CardDetail';
import type { CardDetailGroup } from "../card_types";

interface props_CardDetailBanner {
    elementSet: CardDetailGroup
}

export default function CardDetailBlock({elementSet}: props_CardDetailBanner)
{
    const baseId: string = uuid();

    return(
        <div key={baseId} className="component-carddetailblock">
            {elementSet.elements.map((element, index) => (
                <span key={`${baseId}element${index}`}><CardDetail elementProps={element}/></span>
            ))}
        </div>
    );
}