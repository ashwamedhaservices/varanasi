import { Box, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';

const CategoryItems = ({data}: {data: any[]}) => {
    return <Stack direction='row' gap='1em'>
    {
        data.map(item => (
            <Box border='1px solid gray' padding='1em' borderRadius='1em' minWidth='fit-content'>
                <Stack direction='row' gap='0.5em' alignItems='center'>
                    <Image src={item.image_url} alt={item.name} height='50px' width='60px' />
                    <Box whiteSpace='nowrap'>{item.name}</Box>
                </Stack>
            </Box>
        ))
    }
</Stack>
}


type ComponentProps = {
    data: {
        [key: string]: any[]
    }
}

const Courses: React.FC<ComponentProps> = ({data}) => {
    return (
        <Stack gap='1em'>
            <Text fontWeight={700} fontSize='1.25rem'>Courses</Text>
            <Tabs>
                <TabList>
                    {
                        Object.keys(data).map(category => <Tab key={`course-category-${category}`}>{category}</Tab>)
                    }
                </TabList>
                <TabPanels>
                    {
                        Object.values(data).map((categoryData, index) => <TabPanel key={`course-category-detail-${index}`} overflowX='scroll'><CategoryItems data={categoryData} /></TabPanel>)
                    }
                </TabPanels>
            </Tabs>
        </Stack>
    )
};

export default Courses;
