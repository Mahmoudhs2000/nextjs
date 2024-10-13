import Carousel from "@/components/carousel";
import { Title } from "@mantine/core";


export default function OurPartners(){
    const data = [
        '/images/partner.webp',
        '/images/partner.webp',
        '/images/partner.webp',
        '/images/partner.webp',
        '/images/partner.webp',
    ]
    return <>
        <Title order={3} >Our Partners</Title>
        <Carousel data={data} height={220} />
    </>
}