import symbols from '../../assets/icons/icons.ts';

import { type SymbolData } from "./Symbol";

const BasicSymbols: SymbolData[] = [
    ...[["up", symbols.icon_up], ["down", symbols.icon_down], ["left", symbols.icon_left], ["right", symbols.icon_right]].map((info) => (
        {
            id: info[0],
            background: {
                colour: "#aaaaaa",
                gradient: []
            },
            border: {
                colour: "Transparent",
                thickness: 0,
                radius: 0,
                inset: 0
            },
            icon: info[1],
            textColour: "#000000"
        }
    )),
    ...[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
        {
            id: number.toString(),
            background: {
                colour: "#aaaaaa",
                gradient: []
            },
            border: {
                colour: "Transparent",
                thickness: 0,
                radius: 50,
                inset: 0
            },
            text: number.toString(),
            textColour: "#000000"
        }
    ))/*
    {
        shape: "circle",
        colour: "beige",
        gradient: "white",
        useGradient: false,
        icon: symbols.icon_badge
    },
    {
        shape: "circle",
        colour: "silver",
        gradient: "white",
        useGradient: false,
        icon: symbols.icon_nut
    },
    {
        shape: "circle",
        colour: "yellow",
        gradient: "white",
        useGradient: false,
        icon: symbols.icon_sun
    },
    {
        shape: "circle",
        colour: "green",
        gradient: "white",
        useGradient: false,
        icon: symbols.icon_tree
    }*/
];

export default BasicSymbols;