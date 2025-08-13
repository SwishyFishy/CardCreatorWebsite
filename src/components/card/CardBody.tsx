import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { CardData } from './card_types';

import './styles/card-body.css';

export type BodyData = {
    content: string[],
    colour: string,
    opacity: number
}

export default function CardBody()
{
    const cardData: CardData = useContext(CONTEXT_cardData).cardData;
    const bodyData: BodyData = cardData.body;

    return(
        <div id="component-cardbody" style={{backgroundColor: bodyData.colour, opacity: bodyData.opacity, borderTop: cardData.art.dominance == "full" ? "none" : `1em solid ${cardData.border.colour}`}}>
            {bodyData.content.map((ability, index) => (
                <p key={`body${Object.keys(bodyData.content)[index]}`} className="rules-text">{ability}</p>
            ))}
        </div>
    );
}