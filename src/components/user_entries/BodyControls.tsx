interface props_BodyControls {
    visible: boolean
}

export default function BodyControls({visible}: props_BodyControls)
{
    return(
        <div id="component-bodycontrols" className={visible ? "visible" : "hidden"}>
            <p>Hello Body</p>
        </div>
    );
}