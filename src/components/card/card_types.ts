import type { BorderData } from "./unique_element/CardBorder";
import type { ArtData } from "./unique_element/CardArt";
import type { BodyData } from "./unique_element/CardBody";
import type { FooterData } from "./unique_element/CardFooter";
import type { TitleData } from "./duplicable_element/CardTitle";
import type { CostData } from "./duplicable_element/CardCost";
import type { TypeData } from "./duplicable_element/CardType";
import type { StatsData } from "./duplicable_element/CardStats";
import type { DetailGroupData } from "./duplicable_element/CardDetailBlock";

export type CardCore = {
    height: number,
    width: number
}
export type CardBorder = BorderData;
export type CardArt = ArtData;
export type CardBody = BodyData;
export type CardFooter = FooterData;
export type CardTitle = TitleData;
export type CardCost = CostData;
export type CardType = TypeData;
export type CardStats = StatsData;
export type CardDetailGroup = DetailGroupData;

export type CardData = {
    card: CardCore,
    border: CardBorder,
    art: CardArt,
    body: CardBody,
    footer: CardFooter,
    details: CardDetailGroup[]
}

export type Gradient = {
    colour: string;
    gradient: string[];
    linear?: boolean;
    angle?: number;
    offset?: {
        x: number,
        y: number
    }
}
export function GradientCSS(g: Gradient): {backgroundImage: string}
{
    return{
        backgroundImage: `${g.linear ? `linear-gradient(${g.angle ? g.angle : 0}deg, ` : `radial-gradient(${g.offset ? `at ${g.offset.x ? g.offset.x : 50}% ${g.offset.y ? g.offset.y : 50}%, ` : ""}`}${g.colour}, ${g.gradient.length > 0 ? g.gradient.join(", ") : g.colour})`
    };
}

export type Border = {
    colour: string
    thickness: number,
    inset: number,
    radius: number
}
export function BorderCSS(b: Border)
{
    return{
        border: `${b.thickness}mm solid ${b.colour}`,
        borderRadius: `${b.radius}%`,
        boxShadow: `inset ${b.inset}mm ${b.inset}mm ${b.inset}mm ${b.colour}, inset ${-b.inset}mm ${-b.inset}mm ${b.inset}mm ${b.colour}`
    };
}

export type UniversalProperties = {
    background: Gradient,
    border: Border
}
export function UniversalPropertiesCSS(u: UniversalProperties)
{
    return{
        ...GradientCSS(u.background),
        ...BorderCSS(u.border)
    };
}