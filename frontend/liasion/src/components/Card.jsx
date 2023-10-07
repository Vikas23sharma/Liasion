'use client'

import React, { useContext, useState } from 'react'
import {
    Stack, Text, Button, Card, CardBody, Heading, CardFooter, useColorModeValue, ModalOverlay, useDisclosure, ModalFooter,
    ModalContent,
    Modal,
    ModalCloseButton,
    ModalHeader,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    useToast,
} from '@chakra-ui/react'
import { FcLock } from 'react-icons/fc'
import axios from 'axios'
import { taskcontext } from '../Context/taskcontext'

export default function SimpleCookiePreference({ id, title, description, status, handlestatus, handledelete }) {
    const OverlayTwo = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='80%'
            backdropBlur='2px'
        />
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayTwo />)
    const [edittitle, setEditTitle] = useState("")
    const [editdescription, setEditDescription] = useState("")
    const [editstatus, setEditStatus] = useState("")
    const token = localStorage.getItem("token")
    const authToken = localStorage.getItem("token");
    const headers = {
        Authorization: `Bearer ${authToken}`,
    };
    const toast=useToast()
    const { setTasks } = useContext(taskcontext)


    const getData = () => {
        axios(`${process.env.REACT_APP_API_KEY}/tasks/${id}`, { headers })
            .then((res) => {
                setEditTitle(res.data.data[0].title)
                setEditDescription(res.data.data[0].description)
                setEditStatus(res.data.data[0].status)
                console.log(res.data.data[0])
            })
            .catch((err) => console.log(err))
    }

    const getDataafteredit = () => {
        axios(`${process.env.REACT_APP_API_KEY}/tasks`, { headers })
            .then((res) => {
                setTasks(res.data.data)
                console.log(res.data.data)
            })
            .catch((err) => console.log(err))
    }
    const handleEdittask = () => {
        // console.log(edittitle,editdescription,editstatus)
        let updatedtask = { title: edittitle, description: editdescription, status: editstatus }
        // console.log(updatedtask)
        axios.patch(`${process.env.REACT_APP_API_KEY}/tasks/update/${id}`, updatedtask, { headers })
            .then((res) => {
                getDataafteredit()
                return toast({
                    title: res.data.message,
                    position: 'top',
                    description: "",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                })
                console.log(res.data.message)
            })
            .catch((err) => console.log(err))
        onClose()

    }

    return (
        <Stack p="4" boxShadow="lg" m="0" borderRadius="sm">
            <Stack direction="row" alignItems="center">
                <Heading
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    color={useColorModeValue('gray.700', 'white')}
                    fontSize={'2xl'}
                    fontFamily={'body'}>
                    {title}
                </Heading>
                {/* <FcLock /> */}
            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} m="0px" justifyContent="space-between">
                <Text color={'gray.500'} fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                    {description}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Button onClick={() => {
                        if (!token) { return }
                        getData()
                        setOverlay(<OverlayTwo />)
                        onOpen()
                    }} w={{ base: "30%", md: "30%", lg: "50%" }} variant="outline" colorScheme="green">
                        Edit
                    </Button>
                    <Modal isCentered isOpen={isOpen} onClose={onClose}>
                        {overlay}
                        <ModalContent>
                            <ModalHeader>Edit Task</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <FormControl id='title' isRequired>
                                    <FormLabel>Title</FormLabel>
                                    <Input type="text" value={edittitle} onChange={(e) => setEditTitle(e.target.value)} />
                                </FormControl>
                                <FormControl id='description' isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input type="text" value={editdescription} onChange={(e) => setEditDescription(e.target.value)} />
                                </FormControl>
                                <FormControl id='status' isRequired>
                                    <FormLabel>Status</FormLabel>
                                    {/* <Input type="text"/> */}
                                    <RadioGroup defaultValue='2' >
                                        <Stack spacing={5} direction='row' value={editstatus} onChange={(e) => setEditStatus(e.target.value)}>
                                            <Radio colorScheme={'red'} value={false}>
                                                Pending
                                            </Radio>
                                            <Radio colorScheme={'green'} value={true}>
                                                Completed
                                            </Radio>
                                        </Stack>
                                    </RadioGroup>
                                </FormControl>
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={handleEdittask}>Edit</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Button onClick={() => handledelete(id)} w={{ base: "30%", md: "50%", lg: "50%" }} colorScheme="green">Delete</Button>
                </Stack>
            </Stack>
            <Stack m="0px" direction="row" alignItems="center">
                <Heading color={'gray.500'} fontSize={{ base: 'md' }} textAlign={'left'} maxW={'4xl'}>
                    Status:{status}
                </Heading>
            </Stack>
            <Button onClick={() => handlestatus(id)} w={{ base: "60%", md: "30%", lg: "37%" }} colorScheme="green">{status === "Completed" ? "Mark as pending" : "Mark as completed"}</Button>
        </Stack>
    )
}

// export default function MyCard({ title, description }) {

//     return <Card
//         direction={{ base: 'column', sm: 'row' }}
//         overflow='hidden'
//         variant='outline'
//     >
//         {/* <Image
//             objectFit='cover'
//             maxW={{ base: '100%', sm: '200px' }}
//             src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
//             alt='Caffe Latte'
//         /> */}

//         <Stack>
//             <CardBody>
//                 <Heading size='md'>{title}</Heading>

//                 <Text py='2'>
//                     {description}
//                 </Text>
//             </CardBody>

//             <CardFooter>
//                 <Button variant='solid' colorScheme='blue'>
//                     Edit
//                 </Button>
//                 <Button variant='solid' colorScheme='red'>
//                     Delete
//                 </Button>
//             </CardFooter>
//         </Stack>
//     </Card>
// }
