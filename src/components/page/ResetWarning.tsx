import PageMask from '../common/PageMask';
import './styles/reset_warning.css';

interface props_ResetWarning {
    show: boolean,
    SetShow: Function,
    reset: Function
}

export default function ResetWarning({show, SetShow, reset}: props_ResetWarning)
{
    return(
        <div id={show ? "component-resetwarning" : "hidden"}>
            <PageMask/>
            <div id="resetwarning">
                <h2>WARNING</h2>
                <p>You are about to delete all of your work. Do you wish to proceed?</p>
                <div id="reset-buttonlist">
                    <input type="button" value="Cancel" onClick={() => SetShow(false)}/>
                    <input type="button" value="Yes, reset the card" onClick={() => {
                        reset();
                        SetShow(false);
                    }}/>
                </div>
            </div>
        </div>
    );
}