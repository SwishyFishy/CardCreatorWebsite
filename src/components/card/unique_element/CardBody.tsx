import { useContext } from 'react';
import { CONTEXT_cardData } from '../../page/Layout';

import UninheritablyOpaqueBackground from '../../common/UninheritablyOpaqueBackground';

import './styles/card_body.css';

export type BodyData = {
    content: string[],
    colour: string,
    gradient: string,
    useGradient: boolean,
    opacity: number
}

export default function CardBody()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-body-colour", bodyData.colour);
    document.body.style.setProperty("--card-body-gradient", bodyData.useGradient ? bodyData.gradient : bodyData.colour);
    document.body.style.setProperty("--card-body-opacity", `${bodyData.opacity}`);

    return(
        <div id="component-cardbody">
            <UninheritablyOpaqueBackground opacity="var(--card-body-opacity)" background="linear-gradient(135deg, var(--card-body-colour), var(--card-body-gradient))">
                <div id="card-body-content">
                    {bodyData.content.map((ability, index) => (
                        <p key={`body${Object.keys(bodyData.content)[index]}`} className="ability-text">{ability}</p>
                    ))}
                </div>
            </UninheritablyOpaqueBackground>
        </div>
    );
}