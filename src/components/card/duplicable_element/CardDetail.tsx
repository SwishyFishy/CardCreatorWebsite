import CardTitle from "./CardTitle";
import CardCost from "./CardCost";
import CardType from "./CardType";
import CardStats from "./CardStats";

import type { CardTitle as Title, CardCost as Cost, CardType as Type, CardStats as Stats } from "../card_types";
import type { DetailStyleCSS } from "./CardDetailBlock";

import './styles/card_detail.css';

interface props_CardDetail {
    vertical: boolean,
    elementProps: Title | Cost | Type | Stats,
    elementStyle: DetailStyleCSS
}

export default function CardDetail({vertical, elementProps, elementStyle}: props_CardDetail)
{
    switch (elementProps.id)
    {
        case "title":
            return(<CardTitle vertical={vertical} titleData={elementProps} style={elementStyle}/>);
        case "cost":
            return(<CardCost vertical={vertical} costData={elementProps} style={elementStyle}/>);
        case "type":
            return(<CardType vertical={vertical} typeData={elementProps} style={elementStyle}/>);
        case "stats":
            return(<CardStats vertical={vertical} statsData={elementProps} style={elementStyle}/>);
        case undefined:
            console.error(`Undefined elementProp id - dump: ${elementProps}`);
    }
}