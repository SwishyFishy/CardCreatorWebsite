import { useState } from "react";

import LayoutControls from "../user_entries/LayoutControls";
import ArtControls from "../user_entries/ArtControls";
import BorderControls from "../user_entries/BorderControls";
import BodyControls from "../user_entries/BodyControls";

import './styles/design_pane.css';

export default function DesignPane()
{
    type Tab = "layout" | "border" | "art" | "body";
    const tabs: Tab[] = ["layout", "border", "art", "body"];
    const [tab, setTab] = useState<Tab>("layout");

    return(
        <div id="component-designpane">
            <div id="selector">
                {tabs.map((tab, index) => (
                    <button key={`button${index}`} type="button" onClick={() => setTab(tab)}>{tab.toUpperCase()}</button>
                ))}
            </div>
            <div id="editor-panes">
                <LayoutControls visible={tab == "layout"}/>
                <BorderControls visible={tab == "border"}/>
                <ArtControls visible={tab == "art"}/>
                <BodyControls visible={tab == "body"}/>
            </div>
        </div>
    );
}