import React, { useContext } from 'react'
import { authcontext } from '../Context/authcontext'
import { Navigate } from 'react-router-dom'

const Privateroute = ({ children }) => {
    // const { auth } = useContext(authcontext)
    let active=localStorage.getItem("token")

    if (!active) { return <Navigate to={"/login"} /> }

    return children
}

export default Privateroute
