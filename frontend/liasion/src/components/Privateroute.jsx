import React, { useContext } from 'react'
import { authcontext } from '../Context/authcontext'
import { Navigate, useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'


const Privateroute = ({ children }) => {
    // const { auth } = useContext(authcontext)
    let active=localStorage.getItem("token")
    const navigate=useNavigate()
    const toast=useToast()

    if (!active) {
        navigate("/login")
        // return toast({
        //     title: `Please Login !!`,
        //     status: "info",
        //     isClosable: true,
        //   })
    }
        // return <Navigate to={"/login"} /> }

    return children
}

export default Privateroute
