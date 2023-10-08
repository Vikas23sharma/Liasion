import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import SimpleCookiePreference from '../components/Card';
import { Box, Text, useToast } from '@chakra-ui/react';
import SlideFadeEx from '../components/Transition';
import MyCard from '../components/Card';
import { authcontext } from '../Context/authcontext';
import { taskcontext } from '../Context/taskcontext';

const Dashboard = () => {
    const { tasks, setTasks } = useContext(taskcontext)
    const toast = useToast()
    const user = localStorage.getItem("user")
    const { auth } = useContext(authcontext)
    const authToken = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${authToken}`,
    };

    const getData = () => {
        axios(`${process.env.REACT_APP_API_KEY}/tasks`, { headers })
            .then((res) => {
                setTasks(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])

    const handlestatus = (id) => {
        axios.patch(`${process.env.REACT_APP_API_KEY}/tasks/updatestatus/${id}`)
            .then((res) => {
                getData()
                return toast({
                    title: res.data.message,
                    position: 'top',
                    description: "",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                console.log(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handledelete = (id) => {
        axios.delete(`${process.env.REACT_APP_API_KEY}/tasks/delete/${id}`)
            .then((res) => {
                getData()
                console.log(res.data.message)
                return toast({
                    title: res.data.message,
                    position: 'top',
                    description: "",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch((err) => console.log(err))
    }
    return (
       
         <Box>
            {auth ? <Text as='i' fontSize='3xl'>Hey, {auth}</Text> : <Text as='i' fontSize='3xl'>Hey, {user}</Text>}
            <br />
            <Box className='typewriter'>
            <Text as={"b"} fontSize={"xl"}>Start managing your tasks and boost your productivity.</Text>
            </Box>
            <br />
            <br />
            <Box textAlign={"center"}>
                {tasks.map(el => {
                    return <SlideFadeEx key={el._id}><SimpleCookiePreference title={el.title} description={el.description} id={el._id} handlestatus={() => handlestatus(el._id)}
                        handledelete={() => handledelete(el._id)} status={el.status ? "Completed" : "Pending"} /></SlideFadeEx>
                })}
            </Box>
        </Box>
      
    )
}

export default Dashboard
