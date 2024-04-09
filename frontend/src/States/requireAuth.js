import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectCurrentToken } from './authSlice'

const RequireAuth = ({allowedRole}) => {
    const token = useSelector(selectCurrentToken)
    const location = useLocation()

    return (
        token?.role?.find(role=>allowedRole?.includes(role))
            ?<Outlet />
            :token?.user
            ? <Navigate to="/unauthorized" state={{ from: location }} replace />
            : <Navigate to="/auth" state={{ from: location }} replace />
    )
}
export default RequireAuth