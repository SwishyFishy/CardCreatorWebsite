import { type SymbolData } from "../symbol_library/Symbol"
import { type FooterData } from "./CardFooter";

export type CardTitle = string;
export type CardSymbol = SymbolData;
export type CardArt = string;
export type CardType = string[];
export type CardBody = string[];
export type CardStats = string[];
export type CardFooter = FooterData;

export type CardData = {
    title: CardTitle,
    cost?: CardSymbol[],
    art?: CardArt,
    typeline?: CardType,
    body?: CardBody,
    statsline?: CardStats,
    set?: CardSymbol,
    footer?: CardFooter;
}