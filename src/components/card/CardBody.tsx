import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import './styles/card-body.css';

export type BodyData = {
    content: string[],
    colour: string,
    opacity: number
}

export default function CardBody()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;

    return(
        <div id="component-cardbody" style={{backgroundColor: bodyData.colour, opacity: bodyData.opacity}}>
            {bodyData.content.map((ability, index) => (
                <p key={`body${Object.keys(bodyData.content)[index]}`} className="ability-text">{ability}</p>
            ))}
        </div>
    );
}