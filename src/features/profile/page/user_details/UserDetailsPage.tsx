import React from 'react'
import './UserDetailsPage.css'
import { useSelector } from 'react-redux'
import { FiPhone } from "react-icons/fi";
import { AppState } from '../../../../Store'
import { MdOutlineGroup } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { ProfileData } from '../../../../cores/utils/enums/ProfileData'
import AppDivider from '../../../../cores/utils/components/component/app_divider/AppDivider';
import ProfileImage from '../../../../cores/utils/components/images/profile_image/ProfileImage'
import EditDetailButton from '../../../../cores/utils/components/buttons/edit_detail_button/EditDetailButton'

const UserDetailsPage: React.FC = () => {
  const state = useSelector((state: AppState) => state.dashboard)
  const profile: ProfileData | null | undefined = state.profile;

  return (
    <section className="userDetailsPage">
      <h1>User Detail</h1>
      <div style={{ height: '32px' }}></div>
      <ProfileImage
        url='https://picsum.photos/200/300'
        alt='User Profile Image'
        username={profile?.user.username ?? 'Unknown'}
      />
      <p className='userDetailEmail'>{profile?.user.email}</p>
      <div style={{ height: '32px' }}></div>
      <EditDetailButton
        title='Username'
        value={profile?.user.username ?? ''}
        leadingIcon={<MdOutlinePerson className='editDetailButtonLeadingIcon' />}
      />
      <AppDivider />
      <EditDetailButton
        title='Phone Number'
        value={profile?.user.phoneNumber ?? ''}
        leadingIcon={<FiPhone className='editDetailButtonLeadingIcon' />}
      />
      <AppDivider />
      <EditDetailButton
        title='Gender'
        value={profile?.user.gender ?? ''}
        leadingIcon={<MdOutlineGroup className='editDetailButtonLeadingIcon' />}
      />
      <AppDivider />
      <EditDetailButton
        title='Phone Number'
        value={profile?.user.dateOfBirth ?? ''}
        leadingIcon={<MdOutlineCalendarMonth className='editDetailButtonLeadingIcon' />}
      />
      <AppDivider />
    </section>
  )
}

export default UserDetailsPage