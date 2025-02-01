import './GroupDropdownButton.css'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa6";

interface GroupDropdownButtonProps {
    label: string,
    child: React.ReactElement,
    className?: string | null,
    showTrailing?: boolean | null,
    leadingIcon?: React.ReactElement,
    isLastButton?: boolean | null | undefined,
    isFirstButton?: boolean | null | undefined,
    trailingIcon?: React.ReactElement | null | undefined,
    onClick?: React.ReactEventHandler<HTMLButtonElement> | undefined,
}

const GroupDropdownButton: React.FC<GroupDropdownButtonProps> = (props) => {
    const [showOtherButton, setShowOtherButton] = useState<boolean>(false)

    let className: string = 'groupDropdownButtonParent'
    if (props.isFirstButton !== null && props.isFirstButton !== undefined && props.isFirstButton) {
        className = 'groupDropdownButtonParentFirst'
    }

    if (props.isLastButton !== null && props.isLastButton !== undefined && props.isLastButton) {
        className = 'groupDropdownButtonParentLast'
    }

    return (
        <div className="groupDropdownButton">
            <button onClick={(e) => {
                e.preventDefault();
                if (props.onClick !== null && props.onClick !== undefined) {
                    props.onClick(e)
                } else {
                    setShowOtherButton(!showOtherButton);
                }
            }} className={className}>
                <div className="groupDropdownButtonRight">
                    {props.leadingIcon}
                    {props.label}
                </div>
                {props.trailingIcon ?? props.showTrailing ? <FaAngleRight className='groupTrailingIcon' /> : null}
            </button>
            <div className="groupDropdownButtonChildren">
                {
                    showOtherButton ? props.child : null
                }
            </div>
        </div>

    )
}

export default GroupDropdownButton