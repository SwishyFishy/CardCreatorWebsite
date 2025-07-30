import type { PropsWithChildren } from "react";

import './styles/page_mask.css';

export default function PageMask({children}: PropsWithChildren)
{
    return(
        <>
            <div className="component-pagemask"></div>
            {children}
        </>
    );
}