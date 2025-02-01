import React from 'react'
import './ProfilePage.css'
import { useSelector } from 'react-redux'
import { CiBellOn } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { AppState } from '../../../../Store';
import { useNavigate } from 'react-router-dom';
import { IoLogOutOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RoutesPath } from '../../../../config/routes/RoutesPath';
import { ProfileData } from '../../../../cores/utils/enums/ProfileData';
import ProfileImage from '../../../../cores/utils/components/images/profile_image/ProfileImage';
import GroupDropdownButton from '../../../../cores/utils/components/buttons/group_dropdown_button/GroupDropdownButton';

const ProfilePage: React.FC = () => {
  const navigator = useNavigate()
  const state = useSelector((state: AppState) => state.dashboard)
  const profile: ProfileData | null | undefined = state.profile;

  return (
    <section className="profilePage">
      <div className="profilePageImage">
        <ProfileImage
          url='https://picsum.photos/200/300'
          alt='User Profile Image'
          username={profile?.user.username ?? 'U'}
        />
      </div>
      <p>{profile?.user.username}</p>
      <div style={{ height: '64px' }}></div>
      <div className="settings">
        <p>Settings</p>
        <GroupDropdownButton
          label='Edit User Details'
          isFirstButton={true}
          child={<></>}
          leadingIcon={<LiaUserEditSolid
            className='groupLeadingIcon'
          />}
          showTrailing={true}
          onClick={() => {
            navigator(RoutesPath.USER_DETAIL)
          }}
        />
        <GroupDropdownButton
          label='Notification Settings'
          isLastButton={true}
          child={<></>}
          leadingIcon={<CiBellOn
            className='groupLeadingIcon'
          />}
          showTrailing={true}
          onClick={() => {
            navigator(RoutesPath.NOTIFICATION_SETTING)
          }}
        />
      </div>
      <div style={{ height: '32px' }}></div>
      <div className="helpAndSupport">
        <p>Need Help por Has something in mind?</p>
        <GroupDropdownButton
          label='Support'
          isFirstButton={true}
          child={<></>}
          leadingIcon={<BiSupport
            className='groupLeadingIcon'
          />}
          showTrailing={true}
        />
        <GroupDropdownButton
          label='Legal'
          child={<></>}
          leadingIcon={<MdOutlineVerifiedUser
            className='groupLeadingIcon'
          />}
          showTrailing={true}
        />
        <GroupDropdownButton
          label='Logout'
          isLastButton={true}
          child={<></>}
          leadingIcon={<IoLogOutOutline
            className='groupLeadingIcon'
          />}
        />
      </div>
    </section>
  )
}

export default ProfilePage