'use client'

import {
    Button,
    Checkbox,
    Flex,
    Text,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Image,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authcontext } from '../Context/authcontext'

export default function SplitScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const toast = useToast()
    const navigate = useNavigate()
    const{setauth}=useContext(authcontext)


    const handlelogin = () => {
        const user = { email, password }
        axios.post(`${process.env.REACT_APP_API_KEY}/users/login`, user)
            .then(function (response) {
                // console.log(response.data);
                if (response.data.token) {
                    setauth(response.data.user)
                    localStorage.setItem("token", response.data.token)
                    localStorage.setItem("user", response.data.user)
                    navigate("/dashboard")
                }
                return toast({
                    title: response.data.message,
                    position: 'top',
                    description: "Start managing your tasks!",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        setEmail("")
        setPassword("")

    }
    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={4} w={'full'} maxW={'md'}>
                    <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Text color={'blue.500'}>Forgot password?</Text>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={handlelogin}>
                            Sign in
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    src={
                        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                    }
                />
            </Flex>
        </Stack>
    )
}
