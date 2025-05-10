import './AppButton.css'
import React from 'react'
import { CircularProgress } from '@mui/material'

interface AppButtonProps {
    label: string,
    isLoading: boolean,
    leadingIcon?: React.ReactElement,
    isCircularButton?: boolean | null | undefined,
    onClick: React.ReactEventHandler<HTMLButtonElement>
}

const AppButton: React.FC<AppButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className={props.isCircularButton ? 'circularAppButton' : 'appButton'}>
            {props.leadingIcon !== null ? <div className='leadingIcon'>
                {props.leadingIcon}
            </div> : null}
            {
                props.isLoading ?
                    <CircularProgress
                        style={{
                            height: 32,
                            width: 32,
                            color: 'var(--light)'
                        }}
                    />
                    : props.label
            }
        </button>
    )
}

export default AppButton