import CardTitle from "./CardTitle";
import CardCost from "./CardCost";
import CardType from "./CardType";
import CardStats from "./CardStats";

import type { CardTitle as Title, CardCost as Cost, CardType as Type, CardStats as Stats } from "../card_types";
import type { DetailStyleCSS } from "./CardDetailBlock";

import './styles/card_detail.css';

interface props_CardDetail {
    alignment: "horizontal" | "vertical-left" | "vertical-right",
    elementProps: Title | Cost | Type | Stats,
    elementStyle: DetailStyleCSS
}

export default function CardDetail({alignment, elementProps, elementStyle}: props_CardDetail)
{
    switch (elementProps.id)
    {
        case "title":
            return(<CardTitle alignment={alignment} titleData={elementProps} style={elementStyle}/>);
        case "cost":
            return(<CardCost alignment={alignment} costData={elementProps} style={elementStyle}/>);
        case "type":
            return(<CardType alignment={alignment} typeData={elementProps} style={elementStyle}/>);
        case "stats":
            return(<CardStats alignment={alignment} statsData={elementProps} style={elementStyle}/>);
        case undefined:
            console.error(`Undefined elementProp id - dump: ${elementProps}`);
    }
}