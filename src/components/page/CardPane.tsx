import Card from "../card/Card";

import './styles/cardpane.css';

export default function CardPane()
{
    return(
        <div id="component-cardpane">
            <Card/>
            <div id="footer-controls">
                Hello World
            </div>
        </div>
    );
}