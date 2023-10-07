import { Box, useDisclosure } from "@chakra-ui/react"
import { Fade, ScaleFade, SlideFade } from '@chakra-ui/react'

function SlideFadeEx({children}) {
    // const { isOpen, onToggle } = useDisclosure()
    let isOpen=true
  
    return (
      <>
        {/* <Button onClick={onToggle}>Click Me</Button> */}
        <SlideFade in={isOpen} offsetY='40px'>
          <Box
            p={{ base: "10px", md: "20px", lg: "40px" }}
            // color='white'
            mt='4'
            w={{ base: "95%", md: "70%", lg: "50%" }}
            m={"auto"}
            // bg='teal.500'
            rounded='md'
            shadow='md'
          >
            {/* <Lorem count={1} /> */}
            {children}
          </Box>
        </SlideFade>
      </>
    )
  }

  export default SlideFadeEx