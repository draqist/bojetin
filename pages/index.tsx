import { Button, Center } from '@chakra-ui/react'
import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import { testdummy } from '../utils/UI-LOGIC/helpers.mini'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  
  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // @ts-ignore
  
  return (
    <Center h='100vh'>
      <Button onClick={() => console.log(testdummy)}>CLICK ME TO TEST DUMMY </Button>
    </Center>
  )
}
