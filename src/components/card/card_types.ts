import type { BorderData } from "./unique_element/CardBorder";
import type { ArtData } from "./unique_element/CardArt";
import type { BodyData } from "./unique_element/CardBody";
import type { FooterData } from "./unique_element/CardFooter";
import type { TitleData } from "./duplicable_element/CardTitle";
import type { CostData } from "./duplicable_element/CardCost";
import type { TypeData } from "./duplicable_element/CardType";
import type { StatsData } from "./duplicable_element/CardStats";
import type { DetailGroupData } from "./duplicable_element/CardDetailBlock";

export type CardBorder = BorderData;
export type CardArt = ArtData;
export type CardBody = BodyData;
export type CardFooter = FooterData;
export type CardTitle = TitleData;
export type CardCost = CostData;
export type CardType = TypeData;
export type CardStats = StatsData;
export type CardDetailGroup = DetailGroupData;

export type AllowableDetailKeys = 'ht' | 'hm' | 'hb' | 'lvt' | 'lvm' | 'lvb' | 'rvt' | 'rvm' | 'rvb';

export type CardData = {
    border: CardBorder,
    art: CardArt,
    body: CardBody,
    footer: CardFooter,
    details: {[key: string]: CardDetailGroup}
}

// Contains 
export class Gradient
{
    colour: string;
    gradient: string[];
    linear: boolean;
    angle: number;
    useGradient: boolean;

    constructor(colour: string, gradient: string[] = [],  useGradient: boolean = false, linear: boolean = true, angle: number = 0,)
    {
        this.colour = colour;
        this.gradient = gradient;
        this.linear = linear;
        this.angle = angle;
        this.useGradient = useGradient;
    }

    CSS(): string
    {
        return(`${this.linear ? `linear-gradient(${this.angle}deg, ` : 'radial-gradient('}${this.colour}, ${this.useGradient ? this.gradient.join(' ') : this.colour})`);        
    }
}