import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


SwiperCore.use([Navigation, Pagination, Autoplay]);

interface SliderProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Slider({ continents }: SliderProps) {
  return (
    <Flex w="100%" h={["250px", "450px"]} maxW="1240px" mx="auto" mb={["5", "10"]}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        style={{ width: '100%', flex: '1' }}
      >

        {continents.map(continent => (
          <SwiperSlide key={continent.slug}>
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="center"
              direction="column"
              textAlign="center"
            >
              <Box 
                pos='absolute'
                w="100%"
                h="100%" 
                bgImage={`url('${continent.image}')`} 
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                filter='brightness(70%)'
                zIndex={-1}
              />

              <Link href={`/continente/${continent.slug}`}>
                <a>
                  <Heading fontSize={["3xl", "4xl", "5xl"]} color="gray.100" fontWeight="bold">
                    {continent.title}
                  </Heading>
                  <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem", "1xl", "2xl"]} mt={["2", "4"]}>
                    {continent.summary}
                  </Text>
                </a>
              </Link>
            </Flex>
          </SwiperSlide>
        ))}

      </Swiper>
    </Flex>
  )
}