import symbols from '../../assets/icons/icons.ts';

import { type SymbolData } from "./Symbol";

const BasicSymbols: SymbolData[] = [
    {
        shape: "square",
        colour: "grey",
        icon: symbols.icon_up
    },
    {
        shape: "square",
        colour: "grey",
        icon: symbols.icon_down
    },
    {
        shape: "square",
        colour: "grey",
        icon: symbols.icon_left
    },
    {
        shape: "square",
        colour: "grey",
        icon: symbols.icon_right
    },
    {
        shape: "circle",
        colour: "beige",
        icon: symbols.icon_badge
    },
    {
        shape: "circle",
        colour: "silver",
        icon: symbols.icon_nut
    },
    {
        shape: "circle",
        colour: "yellow",
        icon: symbols.icon_sun
    },
    {
        shape: "circle",
        colour: "green",
        icon: symbols.icon_tree
    }
];

export default BasicSymbols;