import React from 'react'
import { Route, Routes } from 'react-router-dom'
import  SignupCard  from '../pages/Register'
import SplitScreen from '../pages/Login'
import Dashboard from '../pages/Dashboard'


const Allroutes = () => {
    return (
        <Routes>
            <Route path='/register' element={<SignupCard></SignupCard>}></Route>
            <Route path='/login' element={<SplitScreen/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
    )
}

export default Allroutes
