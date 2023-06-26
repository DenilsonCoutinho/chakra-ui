import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box } from "@chakra-ui/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Box m={9}>Tomato</Box>

// You can also use custom values
      <Box maxW="90px" mx="auto" />

// sets margin `8px` on all viewports and `12px` from the first breakpoint and up
      <Box m={[2, 3]} />
    </div>
  )
}
