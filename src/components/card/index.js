import { Card, Image, Text, Button } from '@mantine/core';

export default function CardComponent({ title, description, image, slug, layout = 'vertical' }) {
    return (
        <Card shadow='xl' >
            {layout === 'horizontal' ? (
                <div style={{ display: 'flex' }}>
                    <Image src={image} alt={title} style={{ marginRight: '1rem' }}  />
                    <div>
                        <Text weight={500}>{title}</Text>
                        <Text>{description}</Text>
                        {slug && <Button component="a" href={slug}>Learn More</Button>}
                    </div>
                </div>
            ) : (
                <>
                    <Image src={image} alt={title} height={2000} />
                    <Text weight={500}>{title}</Text>
                    <Text>{description}</Text>
                    {slug && <Button component="a" href={slug}>Learn More</Button>}
                </>
            )}
        </Card>
    );
}
