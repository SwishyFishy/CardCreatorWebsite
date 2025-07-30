import './styles/close_button.css';

interface props_CloseButton {
    Close: Function
}

export default function CloseButton({Close}: props_CloseButton)
{
    return(
        <input type="button" className="component-closebutton" value="X" onClick={() => Close()}/>
    );
}