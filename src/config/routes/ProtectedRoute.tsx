import { AppState } from '../../Store'
import { RoutesPath } from './RoutesPath'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    const user = useSelector((state: AppState) => state.auth);
    return user ? <Outlet /> : <Navigate to={RoutesPath.SIGN_IN} />
}

export default ProtectedRoute