import React from 'react'
import './DateOfBirth.css'
import AppDropdown, { DropdownData } from '../app_dropdown/AppDropdown'

const DateOfBirth: React.FC = () => {
    const options: DropdownData[] = [
        {
            label: 'Data',
            value: 'Data',
        },
        {
            label: 'Atom',
            value: 'Atom',
        },
    ]
    return (
        <div className="dateOfBirth">
            <AppDropdown
                label='Year'
                options={options}
            />
            <AppDropdown
                label='Month'
                options={options}
            />
            <AppDropdown
                label='Day'
                options={options}
            />
        </div>
    )
}

export default DateOfBirth