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
    spawnable?: {
        Spawn: Function
    },
    autodisable?: boolean
}

export default function Control({toggleable = undefined, deletable = undefined, spawnable = undefined, autodisable = false, children}: PropsWithChildren<props_Control>)
{
    return (
        <div className={`component-control ${toggleable ? "toggleable" : ""} ${deletable ? "deletable" : ""} ${spawnable ? "spawnable" : ""}`} inert={autodisable}>
            {children}
            {toggleable ? <input type="checkbox" checked={toggleable.toggle} onChange={() => toggleable.SetToggle()}/> : ""}
            {deletable ? <input className="delete" type="button" value="X" onClick={() => deletable.Delete()}/> : ""}
            {spawnable ? <input className="spawn" type="button" value="+" onClick={() => spawnable.Spawn()}/> : ""}
        </div>
    );
}