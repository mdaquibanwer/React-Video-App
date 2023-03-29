import React from 'react';
import { Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, VStack,HStack} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();  // isOpen will return true if Drawer is Open else return false. onOpen will be use to open the drawer and onClose will be use to close the drawer
  return (
    <>
        <Button pos={'fixed'} top={'4'} left={'4'} zIndex={'overlay'} colorScheme={'purple'} p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen}>
            <BiMenuAltLeft size={'20'}/>
        </Button>
        <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>VIDEO FLIX</DrawerHeader>
                <DrawerBody>
                    {/* stack is a div whiose display is flex and vstack is a div whose flex-direction is column Hstack is a div whose flex-direction is row */}
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/'}>HOME</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/videos'}>VIDEOS</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/videos?category=free'}>FREE VIDEOS</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/upload'}>UPLOAD VIDEO</Link>
                        </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                        <Button onClick={onClose} colorScheme={'purple'}>
                            <Link to={'/login'}>Log In</Link>
                        </Button>
                        <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                            <Link to={'/signup'}>Sign Up</Link>
                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  )
}

export default Header;