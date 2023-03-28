import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.png';

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
};

const Home = () => {
  return (
    <Box>
        <MyCarousel />
        <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
            <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={"2px solid"} m={'auto'}>
                Services
            </Heading>
            <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
                <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']} />
                <Text letterSpacing={'widest'} lineHeight={'175%'} p={['4','16']} textAlign={'center'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni nemo vero dolore nulla odio a porro soluta harum aspernatur veniam eligendi reiciendis, itaque tenetur, inventore ullam quidem eveniet, aut consectetur? Dolor magnam beatae inventore porro nostrum eligendi veniam placeat delectus in ipsum vel architecto, amet officia earum nam at debitis, quisquam sunt mollitia culpa reprehenderit. Consequatur sint fugit esse molestias, rem aut nostrum maxime porro magni. Perferendis autem nobis pariatur, voluptate nihil adipisci. Repellendus cumque nisi minus cupiditate quia molestias, aperiam ipsum fugit tempore illo temporibus non veritatis consectetur voluptate odit ipsa. Amet deserunt tenetur sunt accusamus voluptate earum!
                </Text>
            </Stack>
        </Container>
    </Box>
  )
};

const MyCarousel = () => (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch Future Here
        </Heading>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Gaming is Future
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>
  
      <Box w="full" h={'100vh'}>
        <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
          About Night life
        </Heading>
      </Box>
    </Carousel>
);
  

export default Home;