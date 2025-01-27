import './SSOButton.css'
import React from 'react'

interface SSOButtonProps {
    label: string,
    icon: React.ReactElement,
    onClick: React.ReactEventHandler<HTMLButtonElement>,
}

const SSOButton: React.FC<SSOButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className='ssoButtons'>
            <div className="ssoIcons">
                {props.icon}
            </div>
            <p>{props.label}</p>
        </button>
    )
}

export default SSOButton