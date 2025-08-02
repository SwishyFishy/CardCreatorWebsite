import type { PropsWithChildren } from "react";

import './styles/control.css';

export default function Control({children}: PropsWithChildren)
{
    return (
        <div className="component-control">
            {children}
        </div>
    );
}