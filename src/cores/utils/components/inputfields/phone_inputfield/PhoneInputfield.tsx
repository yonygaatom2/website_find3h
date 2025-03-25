import React from 'react'
import { LuFlag } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import Inputfield from '../app_inputfield/Inputfield'
import { Country } from '../../../../models/CountryModel';

interface PhoneInputfieldProps {
    onChangeCountry: (country: Country) => void,
    onChangePhoneNumber: (phoneNumber?: string | null | undefined) => void
}

const PhoneInputfield: React.FC<PhoneInputfieldProps> = (props) => {
    return (
        <>
            <Inputfield
                onChanged={(e) => {
                    props.onChangePhoneNumber(e.target.value)
                }}
                placeholder="Phone Number"
                errorMessage={null}
                leading={
                    <div className="
                    flex
                    gap-2
                    items-end
                    cursor-pointer
                ">
                        <LuFlag />
                        <p className="
                        leading-[14px]
                    ">+977</p>
                        <MdArrowDropDown />
                    </div>
                }
            />
        </>
    )
}

export default PhoneInputfield