import { Container, VStack, Button, Heading, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container  maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form action="">
            <VStack
            alignItems={'stretch'}
            w={['full', '96']}
            // h={'20'}
            // bgColor={'red'}
            m={'auto'}
            my={'16'}
            >
            <Heading>Welcome Back</Heading>
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
                Log In
            </Button>

            <Text textAlign={'right'} >
                New User? {' '}
                <Button variant={'link'} colorScheme='purple'>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
            </Text>
            </VStack>
        </form>

    </Container>
  )
}

export default Login