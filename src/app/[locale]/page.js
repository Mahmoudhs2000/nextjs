import BusinessTypes from "@/views/home/business-types";
import HomeHeroSection from "@/views/home/hero";
import OurPartners from "@/views/home/our-partners";
import RecentBlogs from "@/views/home/recent-blogs";
import TripTypes from "@/views/home/trip-types";
import { Container } from "@mantine/core";

async function getData() {
  return []
}

export default async function Home() {
  
  const homeSections = await getData();

  return (
    <Container size={'lg'} >
      <HomeHeroSection />
      <br/>
      <TripTypes />
      <br/>
      <BusinessTypes />
      <br/>
      <RecentBlogs />
      <br/>
      <OurPartners />
    </Container>
  );
}
