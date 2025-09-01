import './styles/close_creator_button.css';

interface props_CloseButton {
    Close: Function
}

export default function CloseCreatorButton({Close}: props_CloseButton)
{
    return(
        <input type="button" id="component-closebutton" value="X" onClick={() => Close()}/>
    );
}