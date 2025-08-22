interface props_LayoutControls {
    visible: boolean
}

export default function  LayoutControls({visible}: props_LayoutControls)
{
    return(
        <div id="component-layoutcontrols" className={visible ? "visible" : "hidden"}>
            <p>Hello Layout</p>
        </div>
    );
}