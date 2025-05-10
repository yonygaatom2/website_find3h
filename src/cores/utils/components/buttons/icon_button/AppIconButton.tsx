import React from 'react'
import './AppIconButton.css'

interface AppIconButtonProps {
    isSelected: boolean,
    icon: React.ReactElement,
    label?: string | null | undefined,
    className?: string | null | undefined,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const AppIconButton: React.FC<AppIconButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={`${props.className} appIconButton`}>
            {props.icon} <p className={props.isSelected ? 'selectedIconButtonLabel' : 'iconButtonLabel'}>{props.label}</p>
        </button>
    )
}

export default AppIconButton