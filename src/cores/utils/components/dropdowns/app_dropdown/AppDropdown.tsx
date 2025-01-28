import './AppDropdown.css'
import React, { useState } from 'react'
import { MdArrowDropDown } from "react-icons/md";



export interface DropdownData {
    label: string,
    value?: string | null,
}

export interface AppDropdownProps {
    label: string,
    options: DropdownData[],
}

const AppDropdown: React.FC<AppDropdownProps> = (props) => {
    const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null)
    const [showOptions, setShowOptions] = useState<boolean>(false)

    const toggleShowOptions = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowOptions(!showOptions);
    }

    const selectOption = (e: React.MouseEvent<HTMLButtonElement>, option: DropdownData) => {
        e.preventDefault();
        setSelectedDropdown(option.label);
        setShowOptions(false);
    }

    return (
        <>
            {
                showOptions ?
                    <div className="dropdownOptions">
                        {
                            props.options.map((option: DropdownData, index: number) => {
                                const lastOption: boolean = index == (props.options.length - 1);

                                let className: string = 'dropdownOption'
                                if (lastOption) {
                                    className = 'lastDropdownOption'
                                }

                                return <button onClick={(e) => selectOption(e, option)} key={option.label} className={className}>
                                    {option.label}
                                </button>
                            })
                        }
                    </div> : null
            }
            {showOptions ?
                <div onClick={() => setShowOptions(false)} className="dropdownOptionsWrapper"></div>
                : null
            }
            <button onClick={toggleShowOptions} className="appDropdown">
                <p className='selectedOption'>{selectedDropdown ?? props.label}</p>
                <MdArrowDropDown style={{ fontSize: '32px', color: 'var(--dark-grey)' }} />
            </button>
        </>
    )
}

export default AppDropdown