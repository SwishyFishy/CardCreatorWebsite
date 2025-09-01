import { useContext } from 'react';
import { CONTEXT_cardData } from '../../page/Layout';

import UninheritablyOpaqueBackground from '../../common/UninheritablyOpaqueBackground';

import type { Gradient } from '../card_types';
import { GradientCSS } from '../card_types';

import './styles/card_body.css';

export type BodyData = {
    background: Gradient
    content: string[],
    opacity: number
}

export default function CardBody()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;

    return(
        <div id="component-cardbody">
            <UninheritablyOpaqueBackground opacity={bodyData.opacity} background={GradientCSS(bodyData.background)}>
                <div id="card-body-content">
                    {bodyData.content.map((ability, index) => (
                        <p key={`body${Object.keys(bodyData.content)[index]}`} className="ability-text">{ability}</p>
                    ))}
                </div>
            </UninheritablyOpaqueBackground>
        </div>
    );
}