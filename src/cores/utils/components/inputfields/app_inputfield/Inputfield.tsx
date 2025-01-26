import './Inputfield.css'
import React from 'react'
import { ValidString } from '../../../helpers/validators/ValidString'

interface InputfieldProps {
    type?: string | null,
    placeholder?: string,
    autoComplete?: string | null | undefined,
    leading?: React.ReactElement | null,
    trailing?: React.ReactElement | null,
    errorMessage?: string | null,
    value?: string | null,
    onTapLeading?: React.MouseEventHandler<HTMLElement>,
    onTapTrailing?: React.MouseEventHandler<HTMLElement>,
    onChanged?: React.ChangeEventHandler<HTMLInputElement>,
}

const Inputfield: React.FC<InputfieldProps> = (props) => {
    const hasError: boolean = ValidString(props.errorMessage)
    const value: string = props.value ?? ''

    return (
        <>
            <div className={hasError ? "errorInputfieldWrapper" : "inputfieldWrapper"}>
                {
                    props.leading != null
                        ? <div onClick={props.onTapLeading} className="inputLeading">
                            {props.leading}
                        </div>
                        : <div style={{ width: '16px' }}></div>
                }
                <input
                    value={value}
                    autoComplete={props.autoComplete ?? 'off'}
                    className='inputfield'
                    type={props.type ?? 'text'}
                    placeholder={props.placeholder}
                    onChange={props.onChanged}
                />
                {
                    props.trailing != null
                        ? <div onClick={props.onTapTrailing} className="inputTrailing">
                            {props.trailing}
                        </div>
                        : <div style={{ width: '16px' }}></div>
                }
            </div>
            {
                hasError ?
                    <p className='inputErrorMessage'>{props.errorMessage}</p>
                    : null
            }
        </>
    )
}

export default Inputfield