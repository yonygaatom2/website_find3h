import React from 'react'
import './NotificationSettingPage.css'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineEditNotifications } from "react-icons/md";
import AppDivider from '../../../../cores/utils/components/component/app_divider/AppDivider';
import AppSwitchButton from '../../../../cores/utils/components/buttons/app_switch_button/AppSwitchButton'

const NotificationSettingPage: React.FC = () => {
    return (
        <section className="notificationSettingPage">
            <h1>Notificatino Setting</h1>
            <div style={{ height: '32px' }}></div>
            <AppSwitchButton
                isTrue={true}
                label='In App'
                leadingIcon={
                    <MdOutlineEditNotifications
                        className='editLeadingNotification'
                    />}
            />
            <AppDivider />
            <div style={{ height: '8px' }}></div>
            <AppSwitchButton
                isTrue={true}
                label='Email'
                leadingIcon={
                    <MdOutlineMail
                        className='editLeadingNotification'
                    />}
            />
            <AppDivider />
        </section>
    )
}

export default NotificationSettingPage