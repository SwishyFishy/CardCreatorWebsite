import ControlBackground from './ControlBackground';
import ControlBorder from './ControlBorder';

import type { Gradient, Border, UniversalProperties } from "../card/card_types";

interface props_ControlUniversalProperties {
    data: UniversalProperties,
    SetData: Function
}

export default function ControlUniversalProperties({data, SetData}: props_ControlUniversalProperties)
{
    return(
        <div className="component-controluniversalproperties">
            <ControlBackground data={data.background} SetData={(newData: Gradient) => SetData(newData, data.border)}/>
            <ControlBorder data={data.border} SetData={(newData: Border) => SetData(data.background, newData)}/>
        </div>
    );
}