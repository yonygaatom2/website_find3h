import './DashboardPage.css'
import React, { useEffect } from 'react'
import HomePage from '../../home/HomePage'
import CouplePage from '../../couple/CouplePage'
import { AppDispatch, AppState } from '../../../Store'
import { useDispatch, useSelector } from 'react-redux'
import NavigationSheet from './components/NavigationSheet'
import { initializeDashboard } from '../slice/DashboardSlice'
import ProfilePage from '../../profile/page/profile/ProfilePage'
import { StateStatus } from '../../../cores/utils/enums/StateStatus'
import NotificationPage from '../../notification/page/notification/NotificationPage'

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useSelector((state: AppState) => state.dashboard)

  const pages: React.ReactElement[] = [
    <HomePage />,
    <CouplePage />,
    <NotificationPage />,
    <ProfilePage />,
  ]

  useEffect(() => {
    const controller = new AbortController()
    dispatch(initializeDashboard())

    return () => controller.abort()
  }, [])

  if (state.status === StateStatus.initializeInProgress){
    return <>No Data</>
  }

  if (state.profile === null){
    return <>No Profile</>
  }

  return (
    <div className="dashboardPage">
      <h1 className="dashboardLogo">Find3H</h1>
      <div className="dashboardContent">
        <NavigationSheet />
        {
          pages.map((e: React.ReactElement, index: number) => {
            if (state.pageIndex === index) {
              return <div key={index.toString()} className='dashboardChild'>
                {e}
              </div>;
            }
          })
        }
      </div>
    </div>
  )
}

export default DashboardPage