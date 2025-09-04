import './styles/range_input.css';

interface props_RangeInput {
    min: number,
    max: number,
    step: number,
    value: number,
    SetRange: Function
}

export default function RangeInput({min, max, step, value, SetRange}: props_RangeInput)
{
    return (
        <div className="component-rangeinput">
            <input type="text" value={value} onChange={(e) => SetRange(e)}/>
            <span>{min}</span>
            <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => SetRange(e)}/>
            <span>{max}</span>
        </div>
    );
}