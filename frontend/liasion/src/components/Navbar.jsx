'use client'

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuItem,
    MenuButton,
    MenuList,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Image,
    useToast,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { authcontext } from '../Context/authcontext'

// interface Props {
//   children: React.ReactNode
// }

const Links = ['Dashboard']

const NavLink = (props) => {
    const { children } = props
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'/dashboard'}>
            {children}
        </Box>
    )
}

export default function WithAction() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    let user
    const { auth } = useContext(authcontext)
    const navigate = useNavigate()
    const toast = useToast()
    // console.log(user)

    useEffect(() => {
        user = localStorage.getItem("user")
    }, [user])

    const handlelogout = () => {
        const token = localStorage.getItem("token")
        if (!token) { return }
        else {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate("/login")
            return toast({
                title: `You have been logged out !`,
                status: "info",
                isClosable: true,
            })
        }
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box><Image src='data:image/png;base64,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' boxSize='100px' height={"60px"} fit={"cover"} /></Box>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button
                            variant={'solid'}
                            colorScheme={'teal'}
                            size={'sm'}
                            mr={4}
                            leftIcon={<AddIcon />}>
                            Add Task
                        </Button>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://avatars.dicebear.com/api/male/username.svg'
                                    }
                                />
                            </MenuButton>
                            <MenuList>

                                {auth ? <Box>Hello, {auth}</Box> : user ? <Box>Hello, {user}</Box> : ""}
                                <MenuDivider />
                                <Link to={"/login"}>Login</Link>
                                <br />
                                <br />
                                <Link to={"/register"}>Signup</Link>
                                <br />
                                <br />
                                <Link onClick={handlelogout} >Logout</Link>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    )
}
