import type { PropsWithChildren } from "react";

import './styles/uninheritably_opaque_background.css';

interface props_UninheritablyOpaqueBackground {
    opacity: number,
    background: string
}

export default function UninheritablyOpaqueBackground({opacity, background = "", children}: PropsWithChildren<props_UninheritablyOpaqueBackground>)
{
    return(
        <div className="component-uninheritablyopaquebackground">
            <div className="uob-background" style={{
                backgroundImage: background,
                opacity: opacity
            }}></div>
            <div className="uob-content">{children}</div>
        </div>
    );
}