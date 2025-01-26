import './SSOButton.css'
import React from 'react'

interface SSOButtonProps {
    label: string,
    icon: React.ReactElement,
}

const SSOButton: React.FC<SSOButtonProps> = (props) => {
    return (
        <button className='ssoButtons'>
            <div className="ssoIcons">
                {props.icon}
            </div>
            <p>{props.label}</p>
        </button>
    )
}

export default SSOButton