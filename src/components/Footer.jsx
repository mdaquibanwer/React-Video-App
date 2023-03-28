import { Box, Button, Heading, HStack, Input, Stack, VStack, Text} from '@chakra-ui/react'
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} color={'white'} minH={'40'} p={'16'}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}>
                    Subscribe to get Latest Update
                </Heading>
                <HStack borderBottom={'2px solid'} py={'2'}>
                    <Input placeholder='Enter Email Here' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                    <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend size={'20'}/>
                    </Button>
                </HStack>
            </VStack>
            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Video flix
                </Heading>
                <Text>All rights reserved</Text>
            </VStack>
            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="https://youtube.com" target={'blank'}>Youtube</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="https://Linkedin.com" target={'blank'}>LinkedIn</a>
                </Button>
                <Button variant={'link'} colorScheme={'whiteAlpha'}>
                    <a href="https://github.com" target={'blank'}>Github</a>
                </Button>
            </VStack>
        </Stack>

    </Box>
  )
}

export default Footer;