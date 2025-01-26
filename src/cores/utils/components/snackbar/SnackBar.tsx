import './SnackBar.css'
import React from 'react'
import { MdOutlineClose } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { validateString } from '../../helpers/validators/ValidString';


enum SnackBarType {
    error,
    info,
    success,
    warning,
}

interface SnackBarProps {
    type?: SnackBarType | null,
    errorMessage?: string | null,
}

const SnackBar: React.FC<SnackBarProps> = (props) => {
    var type: string = 'errorSnackBar'
    if (props.type === SnackBarType.info) {
        type = 'infoSnackBar'
    }

    if (props.type === SnackBarType.success) {
        type = 'successSnackBar'
    }

    if (props.type === SnackBarType.warning) {
        type = 'warningSnackBar'
    }

    const hasError: boolean = validateString(props.errorMessage)
    if (!hasError) {
        return <div></div>;
    }

    return (
        <div className={type}>
            <div className="snackBarLeftSection">
                <MdErrorOutline className='snackBarErrorIcon' />
                <p className='snackBarMessage'>
                    {props.errorMessage}
                </p>
            </div>
            <MdOutlineClose className='snackBarCloseIcon' />
        </div>
    )
}

export default SnackBar