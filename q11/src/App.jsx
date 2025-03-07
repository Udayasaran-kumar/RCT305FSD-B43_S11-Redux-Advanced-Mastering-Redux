import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card, CardHeader, CardBody, CardFooter,Text
  ,Stack,Heading,Divider,ButtonGroup,Button,Image } from '@chakra-ui/react'
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
  <Card maxW='sm'margin={10}>
  <CardBody centerContent>
  <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Lindsaey James</Heading>
      <Text color='blue.600' fontSize='1xl'>
        @lindsey_jam3s
      </Text>
      <Text>
        Actress,musician,songwriter and artist.PM for work inquires or
      </Text>
      <Text color='blue.600' fontSize='1xl'>
        #tag
      </Text>
      <Text>
        me in your posts
      </Text>
    </Stack>
  </CardBody>
  <ButtonGroup spacing='0'>
  <Button variant='ghost' colorScheme='BLACK'>
       #ART
      </Button>
      <Button variant='ghost' colorScheme='BLACK'>
       #PHOTOGRAPHY
      </Button>
      <Button variant='ghost' colorScheme='BLACK'>
       #MUSIC
      </Button>
  </ButtonGroup>
  <CardFooter>
    <ButtonGroup spacing='8'>      
      <Button variant='ghost' colorScheme='blue'>
       Message
      </Button>
      <Button variant='solid' colorScheme='blue'>
       Follow
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
    
    </>
  )
}

export default App
 