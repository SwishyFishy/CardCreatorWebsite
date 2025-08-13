import type { BorderData } from "./CardBorder";
import type { ArtData } from "./CardArt";
import type { BodyData } from "./CardBody";
import type { SymbolData } from "../symbol_library/Symbol"
import type { FooterData } from "./CardFooter";

export type CardBorder = BorderData;
export type CardTitle = string;
export type CardSymbol = SymbolData;
export type CardArt = ArtData;
export type CardType = string[];
export type CardBody = BodyData;
export type CardStats = string[];
export type CardFooter = FooterData;

export type CardData = {
    border: CardBorder,
    title: CardTitle,
    cost?: CardSymbol[],
    art: CardArt,
    typeline?: CardType,
    body: CardBody,
    statsline?: CardStats,
    set?: CardSymbol,
    footer: CardFooter;
}