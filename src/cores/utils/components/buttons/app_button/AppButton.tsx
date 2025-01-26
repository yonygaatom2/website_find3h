import './AppButton.css'
import React from 'react'
import { CircularProgress } from '@mui/material'

interface AppButtonProps {
    label: string,
    isLoading: boolean,
    onClick: React.ReactEventHandler<HTMLButtonElement>
}

const AppButton: React.FC<AppButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} className='appButton'>
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