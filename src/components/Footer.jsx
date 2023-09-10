import { Box, HStack, Heading, Stack, Input, VStack, Button, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'}  pt={'6'} color={'white'} >
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'} >
            <Heading size={'sm'} textTransform={'uppercase'} >
                Subscribe to get updates
            </Heading>

            <HStack borderBottom={'2px solid white'} >
                <Input
                placeholder='Enter Email here...'
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor='none'
                />
                <Button
                p={'0'}
                colorScheme='purple'
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
                >
                <AiOutlineSend/>
                </Button>
            </HStack>
          </VStack>

          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
            >
            <Heading size={'sm'} textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>All rights received</Text>
          </VStack>
          
          <VStack w={'full'}>
            <Heading size={'sm'} textTransform={'uppercase'} textAlign={'center'}>
                SOCIAL MEDIA
            </Heading>
            <Button variant={'link'} colorScheme='white'>
                <a href="https://youtube.com">Youtube</a>
            </Button>

            <Button variant={'link'} colorScheme='white'>
                <a href="https://instagram.com">Instagram</a>
            </Button>

            <Button variant={'link'} colorScheme='white'>
                <a href="https://github.com">GitHub</a>
            </Button>
          </VStack>
        </Stack>
    </Box>
  )
}

export default Footer