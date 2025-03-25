import { AppState } from '../../Store'
import { RoutesPath } from './RoutesPath'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthState } from '../../cores/providers/auth/AuthState'
import { useEffect } from 'react'

const ProtectedRoute = () => {
    const navigator = useNavigate()
    const state: AuthState = useSelector((state: AppState) => state.auth)

    useEffect(() => {
        if (state.isLoggedIn) {
            navigator(RoutesPath.DASHBOARD)
        }
    }, [state.isLoggedIn])

    return state.isLoggedIn ? <Outlet /> : <Navigate to={RoutesPath.SIGN_IN} replace />
}

export default ProtectedRoute