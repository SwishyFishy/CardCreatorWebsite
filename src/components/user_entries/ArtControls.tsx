interface props_ArtControls {
    visible: boolean
}

export default function ArtControls({visible}: props_ArtControls)
{
    return(
        <div id="component-artcontrols" className={visible ? "visible" : "hidden"}>
            <p>Hello Art</p>
        </div>
    );
}