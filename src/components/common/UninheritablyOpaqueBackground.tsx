import type { PropsWithChildren } from "react";

import './styles/uninheritably_opaque_background.css';

interface props_UninheritablyOpaqueBackground {
    opacity: number,
    style: any
}

export default function UninheritablyOpaqueBackground({opacity, style, children}: PropsWithChildren<props_UninheritablyOpaqueBackground>)
{
    return(
        <div className="component-uninheritablyopaquebackground">
            <div className="uob-background" style={{
                ...style,
                opacity: opacity
            }}></div>
            <div className="uob-content">{children}</div>
        </div>
    );
}