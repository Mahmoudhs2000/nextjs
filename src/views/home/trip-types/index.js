import Carousel from "@/components/carousel";
import { Title } from "@mantine/core";


export default function TripTypes(){
    const data = [
        '/images/hotel-hero.png',
        '/images/hotel-hero.png',
        '/images/hotel-hero.png',
        '/images/hotel-hero.png',
        '/images/hotel-hero.png',
    ]
    return <>
        <Title order={3} >Trip Types</Title>
        <Carousel data={data} height={300} />
    </>
}