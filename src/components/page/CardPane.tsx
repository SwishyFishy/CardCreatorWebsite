import Card from "../card/Card";
import FooterControls from "../user_entries/FooterControls";

import './styles/card_pane.css';

export default function CardPane()
{
    return(
        <div id="component-cardpane">
            <Card/>
            <FooterControls/>
        </div>
    );
}