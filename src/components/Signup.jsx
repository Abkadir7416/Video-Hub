import { Container, VStack, Button, Heading, Input, Text, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <Container  maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form action="">
            <VStack
            alignItems={'stretch'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
            >
            <Heading textAlign={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'}/>

            <Input 
            placeholder='Name'
            type='text'
            required
            focusBorderColor={'purple.500'}
            />

            <Input 
            placeholder='Email'
            type='email'
            required
            focusBorderColor={'purple.500'}
            />

            <Input 
            placeholder='Password'
            type='password'
            required
            focusBorderColor={'purple.500'}
            />

            <Button variant={'link'} alignSelf={'flex-end'}>
                <Link to={'/forgotpassword'}>Forgot Password</Link>
            </Button>

            <Button colorScheme='purple' type='submit'>
                Sign Up
            </Button>

            <Text textAlign={'right'} >
                Already Signed up? {' '}
                <Button variant={'link'} colorScheme='purple'>
                    <Link to={'/login'}>Log In</Link>
                </Button>
            </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Signup