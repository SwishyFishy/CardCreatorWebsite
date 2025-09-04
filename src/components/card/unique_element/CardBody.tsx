import React, { createElement } from 'react';
import { useContext } from 'react';
import { CONTEXT_cardData, CONTEXT_symbols } from '../../page/Layout';
import Symbol, { type SymbolData } from '../../symbol_library/Symbol';

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
    const symbols: SymbolData[] = useContext(CONTEXT_symbols).symbols;

    const ParseAbility = (text: string, elementKey: string): React.JSX.Element => {
        const abilityText: string[] = text.split(new RegExp(/{\w+}/));
        let symbolicAbility: (string | React.JSX.Element)[] = [];
        let abilityPart: string;
        let totalLength: number = 0;

        // Loop over abilityText, adding the text and appropriate symbol to the symbolicAbility array on each iteration
        abilityText.forEach((ability, index) => {
            symbolicAbility.push(ability);
            
            if (index < abilityText.length - 1)
            {
                abilityPart = text.slice(totalLength);

                const symbol: SymbolData | undefined = symbols.find((symbol) => symbol.id == abilityPart.substring(abilityPart.indexOf('{') + 1, abilityPart.indexOf('}')));
                if (symbol)
                {
                    //symbolicAbility.push(createElement(Symbol, {symbol, key: elementKey.concat(`symbol${index}`)}));
                    symbolicAbility.push("__");
                }
                else
                {
                    symbolicAbility.push("{Unknown Symbol}");
                }

                totalLength += abilityPart.indexOf('}') + 1;
            }
        });

        //return createElement('p', {key: elementKey, className: "ability-text"}, symbolicAbility);
        return(
            <p key={elementKey} className="ability-text">
                {symbolicAbility.join("")}
            </p>
        );
    }

    return(
        <div id="component-cardbody">
            <UninheritablyOpaqueBackground opacity={bodyData.opacity} background={GradientCSS(bodyData.background)}>
                <div id="card-body-content">
                    {bodyData.content.map((ability, index) => ParseAbility(ability, `body${Object.keys(bodyData.content)[index]}`))}
                </div>
            </UninheritablyOpaqueBackground>
        </div>
    );
}