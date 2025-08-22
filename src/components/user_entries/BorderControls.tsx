interface props_BorderControls {
    visible: boolean
}

export default function BorderControls({visible}: props_BorderControls)
{
    return(
        <div id="component-bordercontrols" className={visible ? "visible" : "hidden"}>
            <p>Hello Border</p>
        </div>
    );
}