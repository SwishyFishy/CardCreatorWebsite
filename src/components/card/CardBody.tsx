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

    // Set CSS variables from card data
    document.body.style.setProperty("--card-body-colour", bodyData.colour);
    document.body.style.setProperty("--card-body-opacity", `${bodyData.opacity}`);

    return(
        <div id="component-cardbody">
            {bodyData.content.map((ability, index) => (
                <p key={`body${Object.keys(bodyData.content)[index]}`} className="ability-text">{ability}</p>
            ))}
        </div>
    );
}