import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { useProfileDashboardQuery } from '../redux-store/api';
import PopularCourses from '../components/home/PopularCourses';
import Courses from '../components/home/Courses';

const Home = () => {
    const {data: profileDashboard, isLoading, isError} = useProfileDashboardQuery();
    
    if (isLoading) return <div>Loading...</div>;

    const popularCourses = profileDashboard?.data?.popular_courses || [];

    const courses = profileDashboard?.data?.courses || {};

    return <Stack direction='column' gap='2.5em' padding='2em 0'>
        <PopularCourses data={popularCourses} />    
        <Courses data={courses} />
    </Stack>
};

export default Home;
