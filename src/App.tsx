import './App.css'
import React from 'react'
import { RoutesPath } from './config/routes/RoutesPath'
import SignInPage from './features/sign_in/page/SignInPage'
import ProtectedRoute from './config/routes/ProtectedRoute'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './features/home/presentation/page/HomePage'
import SignUpPage from './features/sign_up/page/sign_up/SignUpPage'
import ErrorPage from './features/error/presentation/page/ErrorPage'
import CreateAccountPage from './features/sign_up/page/create_account/CreateAccountPage'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Routes >
        <Route path={RoutesPath.SIGN_IN} element={<SignInPage />} />
        <Route path={RoutesPath.SIGN_UP} element={<SignUpPage />} />
        <Route path={RoutesPath.CREATE_ACCOUNT} element={<CreateAccountPage />} />

        <Route element={<ProtectedRoute />}>
          <Route path={RoutesPath.HOME} element={<HomePage />} />
        </Route>
        <Route path={RoutesPath.ERROR} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App