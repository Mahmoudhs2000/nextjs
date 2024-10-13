'use client'
import { Carousel as MantineCarousel} from '@mantine/carousel';
import { Image } from '@mantine/core';

export default function Carousel({ data, height }) {
    return <MantineCarousel  align={'center'} slideSize={'40%'} height={height}  slideGap="md" controlsOffset="lg" controlSize={20} loop >
        {data.map((image, index) => (
            <MantineCarousel.Slide key={index}>
                <Image src={image} style={{ objectFit: 'none', height: '100%' }} />
            </MantineCarousel.Slide>
        ))}
    </MantineCarousel>
}
