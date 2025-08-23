import type { PropsWithChildren } from "react"

import './styles/hideable_element.css';

interface props_HideableElement {
    visible: boolean
}

export default function HideableElement({visible, children}: PropsWithChildren<props_HideableElement>)
{
    return(
        <div className={`component-hideableelement ${visible ? 'visible' : 'hidden'}`}>
            {children}
        </div>
    );
}