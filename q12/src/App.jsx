import React from 'react'
import { Card, CardHeader, CardBody, Spacer,Image,Text,Heading, Container, Box, Flex } from '@chakra-ui/react'
function App() {
  return (
    <Container  m='2rem' maxW='vpw' centerContent >
      <Box textAlign="center" mb={{ base: 4, md: 6 }}>  
    <Heading size="lg">Our Clients Speak</Heading>
    <Text>View a summary of all your customers over the last month.</Text>
  </Box>
      <Flex 
    direction={{ base: "column", md: "row" }} 
    wrap="wrap"
    justify="center" 
    gap={6} 
  >
      <Box w={{ base: "100%", md: "30%" }} align='center'>
      <Card align='center'>
        <Heading size='md'>Efficient Collaborating</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae, laudantium exercitationem maiores quis corrupti, suscipit porro hic laborum tempora architecto, debitis at vitae sed commodi cumque ipsa fugiat temporibus.</Text>

      </Card>
      <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
<Heading size='sm'>Efficient Collaborating</Heading>
<Text size='xs'>CEO at ABC Corporation</Text>
      </Box>
      <Spacer />
      <Box w={{ base: "100%", md: "30%" }} align='center'>
      <Card align='center'>
        <Heading size='md'>Efficient Collaborating</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae, laudantium exercitationem maiores quis corrupti, suscipit porro hic laborum tempora architecto, debitis at vitae sed commodi cumque ipsa fugiat temporibus.</Text>

      </Card>
      <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
      />
      <Heading size='sm'>Efficient Collaborating</Heading>
        <Text size='xs'>CEO at ABC Corporation</Text>
      </Box>
      <Spacer />
      <Box w={{ base: "100%", md: "30%" }} align='center'>
      <Card align='center'>
        <Heading size='md'>Efficient Collaborating</Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quae, laudantium exercitationem maiores quis corrupti, suscipit porro hic laborum tempora architecto, debitis at vitae sed commodi cumque ipsa fugiat temporibus.</Text>

      </Card>
      <Image
  borderRadius='full'
  boxSize='150px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'
/>
      <Heading size='sm'>Efficient Collaborating</Heading>
      <Text size='xs'>CEO at ABC Corporation</Text>
      </Box>
      </Flex>
    
      
    </Container>
  )
}

export default App
