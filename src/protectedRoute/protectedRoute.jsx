import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

function ProtectedRoute () {
    const loginUser = useSelector(state => state.users.loginUser)

    if(!loginUser) return <Navigate to = '/login'/>
    return (
        <>
        <div className="">
            <Outlet/>
        </div>
        </>
    )
}

export default ProtectedRoute