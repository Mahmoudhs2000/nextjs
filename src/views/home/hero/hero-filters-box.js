'use client';
import DateSelect from "@/components/date-input/DateSelect";
import { Button, Card, Checkbox, Grid, Select, TextInput } from "@mantine/core";

export default function HomeHeroFilters(){

    return (<>
        <Card shadow="md" mt={-100} >
        <Grid cols={{ xs: 1, md: 3 }} spacing="md" mt="md">
            <Grid.Col span={{xs: 1, md: 4}}>
                <Select
                    label="Select Location"
                    placeholder="Pick one"
                    data={[
                        { value: 'rome', label: 'Rome' },
                        { value: 'paris', label: 'Paris' },
                        { value: 'tokyo', label: 'Tokyo' },
                        { value: 'new-york', label: 'New York' },
                    ]}
                />
            </Grid.Col>
            <Grid.Col span={{xs: 1, md: 4}}>
                <Select
                    label="Select Dates"
                    placeholder="Pick one"
                    data={[
                        { value: 'today', label: 'Today' },
                        { value: 'tomorrow', label: 'Tomorrow' },
                        { value: 'next-week', label: 'Next Week' },
                        { value: 'next-month', label: 'Next Month' },
                    ]}
                />
            </Grid.Col>
            <Grid.Col span={{xs: 1, md: 4}}>
                <Select
                    label="Select Guests"
                    placeholder="Pick one"
                    data={[
                        { value: '1', label: '1 Guest' },
                        { value: '2', label: '2 Guests' },
                        { value: '3', label: '3 Guests' },
                        { value: '4', label: '4 Guests' },
                    ]}
                />
            </Grid.Col>
        </Grid>
            <TextInput
                label="Search"
                placeholder="Search for a location"
                
            />
             <DateSelect
                label="Pick date"
                placeholder="Pick date"
            />
            <Checkbox
                label="Include nearby locations"
                defaultChecked
            />
            <Button
                variant="filled"
                color="blue"
                mt="md"
            >
                Search
            </Button>
        </Card>

    </>
    )
}