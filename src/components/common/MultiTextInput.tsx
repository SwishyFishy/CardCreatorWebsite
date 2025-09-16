import { useEffect, useState } from "react";

import {v4 as uuid} from 'uuid';

import './styles/multitextinput.css';

interface props_MultiTextInput{
    texts: string[],
    SetTexts: Function
}

export default function MultiTextInput({texts, SetTexts}: props_MultiTextInput)
{
    let baseId: string;
    useEffect(() => {
        baseId = uuid();
    }, []);

    const [newItem, setNewItem] = useState<string>("");

    return(
        <div className="component-multitextinput">
            <ul>
                {texts.map((text, index) => (
                    <li key={`${baseId}${index}`}>
                        <input type="text" value={text} onChange={(e) => SetTexts(texts.toSpliced(index, 1, e.target.value))}/>
                        <input type="button" className="remove-button" value="X" onClick={(e) => {
                            e.preventDefault();
                            SetTexts(texts.toSpliced(index, 1));
                        }}/>
                    </li>
                ))}
                <li>
                    <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)}/>
                    <input type="button" className="add-button" value="+" onClick={(e) => {
                        e.preventDefault();
                        SetTexts([...texts, newItem]);
                        setNewItem("");
                    }}/>
                </li>
            </ul>
        </div>
    );
}