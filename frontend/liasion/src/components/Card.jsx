'use client'

import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'
import { FcLock } from 'react-icons/fc'

export default function SimpleCookiePreference({title,description}) {
  return (
    <Stack  p="4" boxShadow="lg" m="0" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">{title}</Text>
        <FcLock />
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
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
