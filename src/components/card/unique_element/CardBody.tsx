import React from 'react';
import { useContext } from 'react';
import { CONTEXT_cardData, CONTEXT_symbols } from '../../page/Layout';
import Symbol, { type SymbolData } from '../../symbol_library/Symbol';

import UninheritablyOpaqueBackground from '../../common/UninheritablyOpaqueBackground';

import { UniversalPropertiesCSS } from '../card_types';
import type { UniversalProperties } from '../card_types';

import './styles/card_body.css';

export type BodyData = {
    content: string[],
    justify: "flex-start" | "flex-end",
    align: "left" | "center" | "end",
    spacing?: number,
    padTop?: number,
    padBottom?: number,
    padLeft?: number,
    padRight?: number
    opacity: number,
} & UniversalProperties

export default function CardBody()
{
    const bodyData: BodyData = useContext(CONTEXT_cardData).cardData.body;
    const symbols: SymbolData[] = useContext(CONTEXT_symbols).symbols;

    // Set CSS variables from card data
    document.body.style.setProperty("--card-body-spacing", `${bodyData.spacing || 0}px`);
    document.body.style.setProperty("--card-body-padding", `${bodyData.padTop || 0}px ${bodyData.padRight || 0}px ${bodyData.padBottom || 0}px ${bodyData.padLeft || 0}px`);
    document.body.style.setProperty("--card-body-justify", bodyData.justify);
    document.body.style.setProperty("--card-body-align", bodyData.align);

    const ParseAbility = (text: string, elementKey: string): React.JSX.Element => {
        const abilityText: string[] = text.split(new RegExp(/{\w+}/));
        let symbolicAbility: (string | React.JSX.Element)[] = [];
        let abilityPart: string;
        let totalLength: number = 0;

        // Loop over abilityText, adding the text and appropriate symbol to the symbolicAbility array on each iteration
        abilityText.forEach((ability, index) => {
            ability.split('').map((char) => (
                symbolicAbility.push(char)
            ));
            
            if (index < abilityText.length - 1)
            {
                abilityPart = text.slice(totalLength);

                const symbol: SymbolData | undefined = symbols.find((symbol) => symbol.id == abilityPart.substring(abilityPart.indexOf('{') + 1, abilityPart.indexOf('}')));
                if (symbol)
                {
                    symbolicAbility.push(<Symbol key={`${elementKey}symbol${index}`} symbol={symbol}/>);
                }
                else
                {
                    symbolicAbility.push("{Unknown Symbol}");
                }

                totalLength += abilityPart.indexOf('}') + 1;
            }
        });

        return(
            <p key={elementKey} className="ability-text">
                {symbolicAbility.map((c, index) => (
                    <span key={`${elementKey}cwrapper${index}`}>{c}</span>
                ))}
            </p>
        );
    }

    return(
        <div id="component-cardbody">
            <UninheritablyOpaqueBackground opacity={bodyData.opacity} styles={UniversalPropertiesCSS({background: bodyData.background, border: bodyData.border})}>
                <div id="card-body-content">
                    {bodyData.content.map((ability, index) => ParseAbility(ability, `body${Object.keys(bodyData.content)[index]}`))}
                </div>
            </UninheritablyOpaqueBackground>
        </div>
    );
}