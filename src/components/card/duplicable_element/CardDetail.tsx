import CardTitle from "./CardTitle";
import CardCost from "./CardCost";
import CardType from "./CardType";
import CardStats from "./CardStats";

import type { CardTitle as Title, CardCost as Cost, CardType as Type, CardStats as Stats } from "../card_types";

interface props_CardDetail {
    elementProps: Title | Cost | Type | Stats
}

export default function CardDetail({elementProps}: props_CardDetail)
{
    switch (elementProps.id)
    {
        case "title":
            return(<CardTitle title={elementProps.title}/>);
        case "cost":
            return(<CardCost cost={elementProps.cost} direction={elementProps.direction}/>);
        case "type":
            return(<CardType types={elementProps.types}/>);
        case "stats":
            return(<CardStats stats={elementProps.stats}/>);
        case undefined:
            console.error(`Undefined elementProp id - dump: ${elementProps}`);
    }
}