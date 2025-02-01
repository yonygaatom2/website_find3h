import React from 'react'
import './NotificationPage.css'
import { VscBell } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';
import { RoutesPath } from '../../../../config/routes/RoutesPath';
import AppButton from '../../../../cores/utils/components/buttons/app_button/AppButton';

const NotificationPage: React.FC = () => {
  const navigator = useNavigate()

  return (
    <section className="notificationPage">
      <div className="notificationPageBell">
        <VscBell className='notficationPageBellIcon' />
      </div>
      <h2 className="noNotificationToShow">
        No Notification to show
      </h2>
      <p className="noNotificationSentence">
        You currently have no notifications. We will notifiy you when something new happen!
      </p>
      <div className="manageSettingButton">
        <AppButton
          isLoading={false}
          label='Manage Settings'
          onClick={(e) => {
            e.preventDefault()
            navigator(RoutesPath.NOTIFICATION_SETTING)
          }}
          isCircularButton={true}
        />
      </div>
    </section>
  )
}

export default NotificationPage