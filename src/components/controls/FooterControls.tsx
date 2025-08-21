import { useContext } from 'react';
import { CONTEXT_cardData } from '../page/Layout';

import type { FooterData } from '../card/unique_element/CardFooter';

import './styles/footer_controls.css';

export default function FooterControls()
{
    const footerData: FooterData = useContext(CONTEXT_cardData).cardData.footer;
    const setFooterData = useContext(CONTEXT_cardData).functions.setFooter;

    return(
        <div id="component-footercontrols">
            Hello World
        </div>
    );
}