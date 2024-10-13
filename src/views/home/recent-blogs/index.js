'use client'
import CardComponent from "@/components/card";
import { Title, Grid } from "@mantine/core";


export default function RecentBlogs(){
    const data = [
        { image: '/images/partner.webp', title: 'Blog Title 1', description: 'Description for blog 1', slug: '/blog-1' },
        { image: '/images/partner.webp', title: 'Blog Title 2', description: 'Description for blog 2', slug: '/blog-2' },
        { image: '/images/partner.webp', title: 'Blog Title 3', description: 'Description for blog 3', slug: '/blog-3' },
        { image: '/images/partner.webp', title: 'Blog Title 4', description: 'Description for blog 4', slug: '/blog-4' },
        { image: '/images/partner.webp', title: 'Blog Title 5', description: 'Description for blog 5', slug: '/blog-5' },
    ];

    return (
        <>
            <Title order={3}>Recent Blogs</Title>
            <Grid>
                {data.map((item, index) => (
                    <Grid.Col span={{xs: 1, md: 4}} key={index}>
                        <CardComponent 
                            title={item.title} 
                            // layout="horizontal"
                            description={item.description} 
                            image={item.image} 
                            slug={item.slug} 
                        />
                    </Grid.Col>
                ))}
            </Grid>
        </>
    );
}
