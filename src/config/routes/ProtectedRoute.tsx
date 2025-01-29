import { AppState } from '../../Store'
import { RoutesPath } from './RoutesPath'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthState } from '../../cores/providers/auth/AuthState'

const ProtectedRoute = () => {
    const state: AuthState = useSelector((state: AppState) => state.auth);
    return state.isLoggedIn ? <Outlet /> : <Navigate to={RoutesPath.SIGN_IN} replace/>
}

export default ProtectedRoute