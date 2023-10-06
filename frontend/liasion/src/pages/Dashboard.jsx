import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleCookiePreference from '../components/Card';
import { Box } from '@chakra-ui/react';
import SlideFadeEx from '../components/Transition';

const Dashboard = () => {
    const [tasks, setTasks] = useState([])
    const authToken = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${authToken}`,
    };

    useEffect(() => {
        axios(`${process.env.REACT_APP_API_KEY}/tasks`, { headers })
            .then((res) => {
                setTasks(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div>
            This will be the dashboard of liasion task managing app!
            <br />
            <br />
            <Box textAlign={"center"}>
                {tasks.map(el => {
                    return <SlideFadeEx><SimpleCookiePreference key={el._id} title={el.title} description={el.description} /></SlideFadeEx>
                })}
            </Box>
        </div>
    )
}

export default Dashboard
