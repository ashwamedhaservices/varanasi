import React from "react";
import { Stack, Text } from "@chakra-ui/react";
import { useProfileDashboardQuery } from "../redux-store/api";
import PopularCourses from "../components/home/PopularCourses";
import Courses from "../components/home/Courses";
import LifeSkills from "../components/home/LifeSkills";

const Dashboard = () => {
  const {
    data: profileDashboard,
    isLoading,
    isError,
  } = useProfileDashboardQuery();

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Text>Error Loading Data</Text>;

  const popularCourses = profileDashboard?.data?.popular_courses || [];

  const courses = profileDashboard?.data?.courses || {};

  const lifeSkills = profileDashboard?.data?.life_skills || [];

  return (
    <Stack direction="column" gap="2.5em" padding="2em 0">
      <PopularCourses data={popularCourses} />
      <Courses data={courses} />
      <LifeSkills data={lifeSkills} />
    </Stack>
  );
};

export default Dashboard;
