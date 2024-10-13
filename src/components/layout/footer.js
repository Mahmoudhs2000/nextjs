import { Box, Container, Divider, Grid, Text } from "@mantine/core";
import Link from "next/link";

export default function Footer(){
 
    const links = [
        { header: "Col1", childs: [{ title: 'Link 1', url: '#' }, { title: 'Link 2', url: '#' }] },
        { header: "Col2", childs: [{ title: 'Link 3', url: '#' }, { title: 'Link 4', url: '#' }] },
        { header: "Col3", childs: [{ title: 'Link 5', url: '#' }, { title: 'Link 6', url: '#' }] },
    ];
    return <>
    <Divider my={4} />
    <Container size={'lg'} py={'lg'}  >
    <Grid>
        <Grid.Col span={{xs: 1, md: 4}}>
            LOGO
        </Grid.Col>
        <Grid.Col span={{xs: 1, md: 6}}>
        <Grid>
            {links.map((linkGroup) => (
                <Grid.Col key={linkGroup.header} span={{xs: 1, md: 4}} >
                    <Box>
                        <Text>{linkGroup.header}</Text>

                        {linkGroup.childs.map((child) => (
                            <Link className="block my-2" key={child.title} href={child.url}>{child.title}</Link>
                        ))}
                    </Box>
                </Grid.Col>
            ))}
        </Grid>
        </Grid.Col>
        <Grid.Col span={{xs: 1, md: 2}}>
            {/* Right Column Content */}
            SUBSCRIBE
        </Grid.Col>
    </Grid>
</Container>
    </>
    
}