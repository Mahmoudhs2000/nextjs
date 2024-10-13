'use client'
import { Grid, Card, Text, Button, Title } from '@mantine/core';

export default function BusinessTypes() {
    return (
        <>
        <Title order={3} >Business Types</Title>
        <Grid>
            <Grid.Col span={4} xs={12}>
                <Card style={{ backgroundImage: 'url(/images/hotel-hero.png)', backgroundSize: 'cover', height: 180 }} className='flex flex-col' >
                    <Text className='flex-1 grid items-center' c='white' mb={6} >Your Text Here</Text>
                    <Button>Your Button</Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={4} xs={12}>
                <Card style={{ backgroundImage: 'url(/images/hotel-hero.png)', backgroundSize: 'cover', height: 180 }} className='flex flex-col' >
                    <Text className='flex-1 grid items-center' c='white' mb={6} >Your Text Here</Text>
                    <Button>Your Button</Button>
                </Card>
            </Grid.Col>
            <Grid.Col span={4} xs={12}>
                <Card style={{ backgroundImage: 'url(/images/hotel-hero.png)', backgroundSize: 'cover', height: 180 }} className='flex flex-col' >
                    <Text className='flex-1 grid items-center' c='white' mb={6} >Your Text Here</Text>
                    <Button>Your Button</Button>
                </Card>
            </Grid.Col>
        </Grid>
    </>
    );
}

