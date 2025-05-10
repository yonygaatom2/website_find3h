import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../../Store'
import { MdOutlineEmail } from "react-icons/md";
import { SearchState } from '../slice/SearchState'
import AppButton from '../../../cores/utils/components/buttons/app_button/AppButton'
import GroupRadioButton from '../../../cores/utils/components/radios/GroupRadioButton'
import Inputfield from '../../../cores/utils/components/inputfields/app_inputfield/Inputfield'
import PhoneInputfield from '../../../cores/utils/components/inputfields/phone_inputfield/PhoneInputfield';

const SearchForms: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state: SearchState = useSelector((state: AppState) => state.search)
   const LOGO_IMAGE = '/assets/flags/ad.svg';


  return (
    <div className="
      pt-8
    ">
      <img src={LOGO_IMAGE} alt="image" />
      <h2 className="
        text-3xl
        font-semibold
        font-appHeader
        text-secondary-500
      ">Add Details</h2>
      <p className="
        text-[14px]
        text-grey-500
      ">Fill at least one field.</p>
      <div className="h-4"></div>
      <Inputfield
        leading={<MdOutlineEmail className="text-grey-500 h-6 w-6"/>}
        type="email"
        placeholder="Email"
        onChanged={(e: React.ChangeEvent<HTMLInputElement>) => { }}
        value={state.searchData?.email}
        errorMessage={null}
      />
      <div className="h-[16px]"></div>
      <PhoneInputfield
        onChangeCountry={(e) => {
        }}
        onChangePhoneNumber={(e) => {}}
      />
      <div className="h-[32px]"></div>
      <h2>Gender</h2>
      <div className="h-[8px]"></div>
      <GroupRadioButton
        labels={["Male", "Female", "Other"]}
        onChangeValue={(value?: string | null) => {}}
      />
      <div className="w-full absolute bottom-4 right-0 p-4">
        <AppButton
          isLoading={false}
          label="Start Search"
          onClick={(e) => { }}
        />
      </div>
    </div>
  )
}

export default SearchForms