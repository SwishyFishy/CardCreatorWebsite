interface props_CharacterLimitedInput{
    limit: number,
    limitStyle: "stop" | "replace",
    text: string,
    SetText: Function
}

export default function CharacterLimitedInput({limit, limitStyle = "stop", text, SetText}: props_CharacterLimitedInput)
{
    const handleInput = (newInput: string): string => {
        switch (limitStyle)
        {
            case "stop":
                return newInput.slice(0, limit);

            case "replace":
                return newInput.slice(-limit);
        }
    }

    return(
        <div className="component-characterlimitedinput">
            <input type="text" value={text} onChange={(e) => SetText(handleInput(e.target.value))}/>
        </div>
    );
}