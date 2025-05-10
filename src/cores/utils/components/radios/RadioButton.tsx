import React, { useState } from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

interface RadioButtonProps {
    label?: string | null,
    initialValue?: boolean | null,
}

const RadioButton: React.FC<RadioButtonProps> = (props) => {
    const [checked, setChecked] = useState<boolean>(props.initialValue ?? false)
    const handleChangeValue = () => {
        setChecked(!checked)
    }

    return (
        <div className="
                flex
                gap-2
                items-center
                cursor-pointer
            "
            onClick={handleChangeValue}
        >
            {checked ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff /> }
            <p className="
                text-[14px]
                font-normal
                font-g
            ">
                {props.label}
            </p>
        </div>
    )
}

export default RadioButton