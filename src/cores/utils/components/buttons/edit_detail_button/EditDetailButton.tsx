import React from 'react'
import './EditDetailButton.css'
import { FiEdit } from "react-icons/fi";

interface EditDetailButtonProps {
    title: string,
    value: string,
    leadingIcon: React.ReactElement,
    trailingIcon?: React.ReactElement | null,
}

const EditDetailButton: React.FC<EditDetailButtonProps> = (props) => {
    return (
        <button className="editDetailButton">
            <div className="userDetailData">
                {props.leadingIcon}
                <div className="editDetailTexts">
                    <p className="editDetailTitle">{props.title}</p>
                    <p className="editDetailSubTitle">{props.value}</p>
                </div>
            </div>
            {props.trailingIcon ?? <FiEdit className='editDetailButtonTrailingIcon' />}

        </button>
    )
}

export default EditDetailButton
