import type { PropsWithChildren } from "react";

import './styles/control.css';

interface props_Control {
    toggleable?: {
        toggle: boolean,
        SetToggle: Function
    }
}

export default function Control({toggleable = undefined, children}: PropsWithChildren<props_Control>)
{
    return (
        <div className={`component-control ${toggleable ? "toggleable" : ""}`}>
            {children}
            {toggleable ? <input type="checkbox" checked={toggleable.toggle} onChange={() => toggleable.SetToggle()}/> : ""}
        </div>
    );
}