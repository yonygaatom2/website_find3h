import React from 'react'
import './ProfilePage.css'
import { AppState } from '../../../Store'
import { useSelector } from 'react-redux'

const ProfilePage: React.FC = () => {
  const state = useSelector((state: AppState) => state.dashboard)

  return (
    <section className="profilePage">
        <div className="userDetail">
          {
            state.profile?.user.username
          }
        </div>
    </section>
  )
}

export default ProfilePage