import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  SignupCard  from '../pages/Register'
import SplitScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Privateroute from './Privateroute'
import CallToActionWithIllustration from '../pages/Home'


const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CallToActionWithIllustration></CallToActionWithIllustration>}></Route>
            <Route path='/register' element={<SignupCard></SignupCard>}></Route>
            <Route path='/login' element={<SplitScreen/>}></Route>
            <Route path='/dashboard' element={<Privateroute><Dashboard/></Privateroute>}></Route>
        </Routes>
    )
}

export default Allroutes
