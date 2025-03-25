import './App.css'
import React, { useEffect } from 'react'
import { RoutesPath } from './config/routes/RoutesPath'
import SignInPage from './features/sign_in/page/SignInPage'
import ProtectedRoute from './config/routes/ProtectedRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './features/sign_up/page/sign_up/SignUpPage'
import ErrorPage from './features/error/presentation/page/ErrorPage'
import DashboardPage from './features/dashboard/pages/DashboardPage'
import UserDetailsPage from './features/profile/page/user_details/UserDetailsPage'
import CreateAccountPage from './features/sign_up/page/create_account/CreateAccountPage'
import NotificationSettingPage from './features/notification/page/notification_setting/NotificationSettingPage'
import { AppDispatch } from './Store'
import { useDispatch } from 'react-redux'
import { initializeAuth } from './cores/providers/auth/AuthSlice'

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(initializeAuth())
  }, [])

  return (
    <BrowserRouter >
      <Routes >
        <Route path={RoutesPath.SIGN_IN} element={<SignInPage />} />
        <Route path={RoutesPath.SIGN_UP} element={<SignUpPage />} />
        <Route path={RoutesPath.CREATE_ACCOUNT} element={<CreateAccountPage />} />

        {/* Private Route */}
        <Route element={<ProtectedRoute />}>
          <Route path={RoutesPath.DASHBOARD} element={<DashboardPage />} />
          <Route path={RoutesPath.USER_DETAIL} element={<UserDetailsPage />} />
          <Route path={RoutesPath.NOTIFICATION_SETTING} element={<NotificationSettingPage />} />
        </Route>
        <Route path={RoutesPath.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App