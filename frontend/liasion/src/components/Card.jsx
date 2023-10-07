'use client'

import React from 'react'
import { Stack, Text, Button, Card, CardBody, Heading, CardFooter, useColorModeValue } from '@chakra-ui/react'
import { FcLock } from 'react-icons/fc'

export default function SimpleCookiePreference({ title, description }) {
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
                <FcLock />
            </Stack>

            <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
                <Text color={'gray.500'} fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
                    {description}
                </Text>
                <Stack direction={{ base: 'column', md: 'row' }}>
                    <Button variant="outline" colorScheme="green">
                        Edit
                    </Button>
                    <Button colorScheme="green">Delete</Button>
                </Stack>
            </Stack>
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
