import type { PropsWithChildren } from "react";

import './styles/uninheritably_opaque_background.css';

interface props_UninheritablyOpaqueBackground {
    opacity: number,
    styles: any
}

export default function UninheritablyOpaqueBackground({opacity, styles, children}: PropsWithChildren<props_UninheritablyOpaqueBackground>)
{
    return(
        <div className="component-uninheritablyopaquebackground">
            <div className="uob-background" style={{
                ...styles,
                opacity: opacity
            }}></div>
            <div className="uob-content" style={{
                border: styles?.border ? styles.border : "",
                borderRadius: styles?.borderRadius ? styles.borderRadius : ""
            }}>{children}</div>
        </div>
    );
}