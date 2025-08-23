import type { PropsWithChildren } from "react";

import './styles/toggleable_control.css';

interface props_ToggleableControl {
    toggle: boolean,
    SetToggle: Function
}

export default function ToggleableControl({toggle, SetToggle, children}: PropsWithChildren<props_ToggleableControl>)
{
    return (
        <div className="component-toggleablecontrol">
            {children}
            <input type="checkbox" checked={toggle} onChange={() => SetToggle()}/>
        </div>
    );
}