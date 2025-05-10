import React from 'react'
import './AddDetailComponent.css'
import { useNavigate } from 'react-router-dom';
import { MdOutlinePersonSearch } from "react-icons/md";
import { RoutesPath } from '../../../../../config/routes/RoutesPath';

const AddDetailComponent: React.FC = () => {
    const navigator = useNavigate()

    return (
        <button
            onClick={(e) => {
                e.preventDefault()
                navigator(RoutesPath.USER_DETAIL)
            }}
            className="addDetailComponent">
            <p className="addDetailTitle">
                Complete Your Details
            </p>
            <p className="addDetailSubTitle">
                Other users can search for you using the details you provide.
            </p>
            <MdOutlinePersonSearch className='addSearchDetail' />
            <p className="addSearchDetailLabel">
                Add Search details
            </p>
        </button>
    )
}

export default AddDetailComponent