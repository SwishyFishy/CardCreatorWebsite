import type { PropsWithChildren } from "react";

import './styles/control.css';

interface props_Control {
    toggleable?: {
        toggle: boolean,
        SetToggle: Function
    },
    deletable?: {
        Delete: Function
    }
}

export default function Control({toggleable = undefined, deletable = undefined, children}: PropsWithChildren<props_Control>)
{
    return (
        <div className={`component-control ${toggleable ? "toggleable" : ""} ${deletable ? "deletable" : ""}`}>
            {children}
            {toggleable ? <input type="checkbox" checked={toggleable.toggle} onChange={() => toggleable.SetToggle()}/> : ""}
            {deletable ? <input className="delete" type="button" value="X" onClick={() => deletable.Delete()}/> : ""}
        </div>
    );
}