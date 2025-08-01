import { images } from '../../assets/icons/icons.ts';

import { type SymbolData } from "./Symbol";

const BasicSymbols: SymbolData[] = [
    {
        shape: "square",
        colour: "grey",
        icon: images.icon_up
    },
    {
        shape: "square",
        colour: "grey",
        icon: images.icon_down
    },
    {
        shape: "square",
        colour: "grey",
        icon: images.icon_left
    },
    {
        shape: "square",
        colour: "grey",
        icon: images.icon_right
    },
    {
        shape: "circle",
        colour: "beige",
        icon: images.icon_badge
    },
    {
        shape: "circle",
        colour: "silver",
        icon: images.icon_nut
    },
    {
        shape: "circle",
        colour: "yellow",
        icon: images.icon_sun
    },
    {
        shape: "circle",
        colour: "green",
        icon: images.icon_tree
    }
];

export default BasicSymbols;