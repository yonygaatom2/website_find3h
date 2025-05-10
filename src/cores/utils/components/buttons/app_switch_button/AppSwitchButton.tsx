import './AppSwitchButton.css'
import React, { useState } from 'react'

interface AppSwitchButtonProps {
    label: string,
    isTrue: boolean,
    showDivider?: boolean,
    leadingIcon: React.ReactElement,
}

const AppSwitchButton: React.FC<AppSwitchButtonProps> = (props) => {
    const [isOn, setIsOn] = useState<boolean>(false)

    return (
        <>
            <div className="appSwitchButton">
                <div className="appSwitchLeadingButton">
                    {props.leadingIcon}
                    {props.label}
                </div>
                <div onClick={(e) => {
                    e.preventDefault()
                    setIsOn(!isOn)
                }} className={isOn ? "appSwitchOn" : "appSwitchOff"}>
                    {
                        isOn ?
                            <div className="switchOn"></div>
                            :
                            <div className="switchOff"></div>
                    }
                </div>
            </div>
        </>
    )
}

export default AppSwitchButton