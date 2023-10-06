import { Box, useDisclosure } from "@chakra-ui/react"
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'

function SlideFadeEx({children}) {
    // const { isOpen, onToggle } = useDisclosure()
    let isOpen=true
  
    return (
      <>
        {/* <Button onClick={onToggle}>Click Me</Button> */}
        <SlideFade in={isOpen} offsetY='40px'>
          <Box
            p='40px'
            // color='white'
            mt='4'
            w={"50%"}
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