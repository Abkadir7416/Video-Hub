// import { Box, Center, Container, Heading, Stack, Text } from '@chakra-ui/react'
// import { Image } from '@chakra-ui/react'
// import React from 'react'
// import { Carousel } from 'react-responsive-carousel'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'

// import img1 from '../assets/1.jpg'
// import img2 from '../assets/2.jpg'
// import img3 from '../assets/3.jpg'
// import img4 from '../assets/4.jpg'
// import img5 from '../assets/5.png'


// const headingOptions = {
//     pos: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     textTransform: "uppercase",
//     p: '4',
//     size: '2xl',
// };

// const Home = () => {
//     return (
//         <Box>
//             <Carousel
//                 autoPlay
//                 infiniteLoop
//                 interval={5000}
//                 showStatus={false}
//                 showThumbs={false}
//                 showArrows={false}
//             >

//                 <Box w={'full'} h={'100vh'}>
//                     <Image src={img1} />
//                     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
//                         Watch the Futures
//                     </Heading>
//                 </Box>
//                 <Box w={'full'} h={'100vh'}>
//                     <Image src={img2} />
//                     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
//                         Future is Gaming
//                     </Heading>
//                 </Box>
//                 <Box w={'full'} h={'100vh'}>
//                     <Image src={img3} />
//                     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
//                         Gaming on Console
//                     </Heading>
//                 </Box>
//                 <Box w={'full'} h={'100vh'}>
//                     <Image src={img4} />
//                     <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >
//                         Night life is cool
//                     </Heading>
//                 </Box>
//             </Carousel>

//             {/* ------------------------ */}

//             <Container  minH={'100vh'} minW={'container.xl'} p={'16'}>

//                 <Heading
//                     textTransform={'uppercase'}
//                     py={'4'}
//                     w={'fit-content'}
//                     borderBottom={'2px solid'}
//                     m="auto"
//                 >
//                     Services
//                 </Heading>

//                 <Stack
//                     //   w={'full'}
//                     h={'full'}
//                     p={'4'}
//                     alignItems={'center'}
//                     direction={['column', 'row']}
//                     //   textAlign={'center'}
//                     //   justifyContent={'center'}
//                     // bgColor={'black'}
//                 >
//                     <Image h={['40', '400']} src={img5} filter={'hue-rotate(-130deg)'} />

//                 <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4', '16']} textAlign={'center'} >
//                     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ullam eius quia optio, officia saepe vel officiis, repellendus nulla minus dolore vero sint. Cum autem est illum distinctio, harum similique quisquam perferendis, laborum rerum quas pariatur mollitia velit aliquam fugit nostrum magnam impedit non earum aperiam officia saepe vel officiis, repellendus nulla minus dolore vero sint. Cum autem est illum distinctio, harum similique quisquam perferendis, laborum rerum quas pariatur mollitia velit aliquam fugit nostrum magnam impedit non earum aperiam accusamus officia exercitationem numquam sit. Earum ipsum et, natus ullam neque debitis sed quisquam illo atque
//                 </Text>
//                 </Stack>

//             </Container>

//         </Box>
//     )
// };


// const myCarousel = () => {




// }


// export default Home


// ------------------------------------------------------



import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '2xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '300']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto 
            
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future is Gaming
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
        Night life is cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
