import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SimpleCookiePreference from '../components/Card';
import { Box } from '@chakra-ui/react';
import SlideFadeEx from '../components/Transition';
import MyCard from '../components/Card';

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
                    return <SlideFadeEx key={el._id}><SimpleCookiePreference title={el.title} description={el.description} status={el.status ? "Completed" : "Pending"} /></SlideFadeEx>
                })}
            </Box>
        </div>
    )
}

export default Dashboard
