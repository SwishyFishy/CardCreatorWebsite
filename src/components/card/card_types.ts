import type { BorderData } from "./CardBorder";
import type { ArtData } from "./CardArt";
import type { BodyData } from "./CardBody";
import type { SymbolData } from "../symbol_library/Symbol"
import type { FooterData } from "./CardFooter";

export type CardBorder = BorderData;
export type CardArt = ArtData;
export type CardBody = BodyData;
export type CardFooter = FooterData;
export type CardTitle = string;
export type CardCost = CardSymbol[];
export type CardType = string[];
export type CardStats = string[];
export type CardSymbol = SymbolData;

export type CardDetailGroup = {
    elements: (CardTitle | CardCost | CardType | CardStats)[],
    position: "top" | "middle" | "bottom"
}

export type CardData = {
    border: CardBorder,
    art: CardArt,
    body: CardBody,
    footer: CardFooter,
    details: CardDetailGroup[]
}