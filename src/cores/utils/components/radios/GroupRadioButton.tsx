import React, { useState } from 'react'
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io'

interface GroupRadioButtonProps {
    labels: string[],
    initialValue?: string | null | undefined,
    onChangeValue: (value?: string | null) => void,
}

const GroupRadioButton: React.FC<GroupRadioButtonProps> = (props) => {
    const [currentValue, changeCurrentValue] = useState<string | null | undefined>(props.initialValue)
    const handleChangeValue = (value: string) => {
        props.onChangeValue(value)
        if (value == currentValue) {
            changeCurrentValue(null)
            return
        }
        changeCurrentValue(value)
    }

    return (
        <>
            {
                props.labels.map((value: string, index: number) => {
                    return <div key={index} className="
                            flex
                            gap-2
                            items-center
                            cursor-pointer
                        "
                        onClick={() => { handleChangeValue(value) }}
                    >
                        {currentValue === value ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
                        <p className="
                        text-[14px]
                        font-normal
                        font-g
                        ">
                            {value}
                        </p>
                    </div>
                })
            }
        </>
    )
}

export default GroupRadioButton