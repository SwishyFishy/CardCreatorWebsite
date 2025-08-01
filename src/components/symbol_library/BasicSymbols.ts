import icon_up from '../../assets/icon_arrowup.png';
import icon_down from '../../assets/icon_arrowdown.png';
import icon_left from '../../assets/icon_arrowleft.png';
import icon_right from '../../assets/icon_arrowright.png';
import icon_badge from '../../assets/icon_badge.png';
import icon_nut from '../../assets/icon_nut.png';
import icon_sun from '../../assets/icon_sun.png';
import icon_tree from '../../assets/icon_tree.png';

import { type SymbolData } from "./Symbol";

const BasicSymbols: SymbolData[] = [
    {
        shape: "square",
        colour: "grey",
        icon: icon_up
    },
    {
        shape: "square",
        colour: "grey",
        icon: icon_down
    },
    {
        shape: "square",
        colour: "grey",
        icon: icon_left
    },
    {
        shape: "square",
        colour: "grey",
        icon: icon_right
    },
    {
        shape: "circle",
        colour: "beige",
        icon: icon_badge
    },
    {
        shape: "circle",
        colour: "silver",
        icon: icon_nut
    },
    {
        shape: "circle",
        colour: "yellow",
        icon: icon_sun
    },
    {
        shape: "circle",
        colour: "green",
        icon: icon_tree
    }
];

export default BasicSymbols;