'use client'
import { Box, Grid, Text, Title } from "@mantine/core";
import Image from "next/image";

export default function HomeHeroStatic(){
  
    return <Grid  >
        <Grid.Col span={{ xs: 12, md: 6 }} className="grid items-center" >
            <Box>
                <Text 
                    fw={900}
                    variant="gradient"
                    component='div'
                    gradient={{ from: 'yellow', to: 'blue', deg: 90 }} 
                >
                    <Title order={1} className="text-center mb-5"  >
                        Find Hotel Rooms, Resorts with exciting deals and offers
                    </Title>
                </Text>
                <Title order={2} className="text-center" >
                    We have a wide range of Hotel Rooms, Resorts and villas with exciting deals
                </Title>
            </Box>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, md: 6 }} className="grid place-items-center" >
            <Image
                width={400}
                height={600}
                src={'/images/hotel-hero.png'}
                alt="hotel"
            />
        </Grid.Col>
    </Grid>
}