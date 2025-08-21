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
export type CardStats = StatsData
export type CardDetailGroup = DetailGroupData

export type AllowableDetailKeys = 'ht' | 'hm' | 'hb' | 'lvt' | 'lvm' | 'lvb' | 'rvt' | 'rvm' | 'rvb';

export type CardData = {
    border: CardBorder,
    art: CardArt,
    body: CardBody,
    footer: CardFooter,
    details: {[key: string]: CardDetailGroup}
}