import type { PropsWithChildren } from "react";

export type BorderData = {
    colour: string
}

export default function CardBorder({children}: PropsWithChildren)
{
    return(
        <div id="component-cardborder">
            {children}
        </div>
    );
}