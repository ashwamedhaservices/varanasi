import { Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type ComponentProps = {
    data: any[];
}

const PopularCourses: React.FC<ComponentProps> = ({data}) => {

    if (!data || data.length === 0) return null;

    return (
        <Stack direction='column' gap='1em'>
            <Text fontSize='1.25rem' fontWeight={700}>Popular Courses</Text>

            <Stack direction='row' gap='1em' overflow='scroll'>
                {
                    data.map(item => (
                        <Stack direction='column' gap='0.5em' alignItems='center'>
                            <Image src={item.image_url} alt={item.name} width='100px' />
                            <Text>{item.name}</Text>
                            <Text fontSize='0.875rem' color='gray'>{item.level}</Text>
                        </Stack>
                    ))
                }
            </Stack>
        </Stack>
    )
};

export default PopularCourses;
