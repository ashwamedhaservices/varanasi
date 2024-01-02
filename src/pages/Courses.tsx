import { Alert, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSubjectsQuery } from "../redux-store/api/components/courses";

const Courses = () => {
  const { courseId } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const courseName = location.state.courseName;

  const {
    data: subjects,
    isLoading,
    isError,
  } = useSubjectsQuery({ courseId: courseId! }, { skip: !courseId });

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Alert status="error">Error loading subjects</Alert>;

  return (
    <Stack gap="2em">
      <Text fontSize="1.5rem" fontWeight={700}>
        {courseName}
      </Text>
      <Stack
        direction={{ base: "column", lg: "row" }}
        flexWrap="wrap"
        gap="2em"
      >
        {subjects!.data.map((subject) => (
          <Stack
            direction="row"
            gap="0.75em"
            key={`course-${courseId}-subject-${subject.id}`}
          >
            <Image width="50px" height="50px" src={subject.image_url} />
            <Stack alignItems="baseline">
              <Text fontSize="1.25rem" fontWeight={700}>
                {subject.name}
              </Text>
              <Button
                variant="link"
                size="sm"
                colorScheme="red"
                onClick={() =>
                  navigate(`/subjects/${subject.id}/chapters`, {
                    state: { subjectName: subject.name },
                  })
                }
              >
                View Chapters
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Courses;
