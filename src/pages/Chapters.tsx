import { Alert, Button, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useChaptersQuery } from "../redux-store/api/components/courses";

const Chapters = () => {
  const { subjectId } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const subjectName = location.state.subjectName;

  const {
    data: chapters,
    isLoading,
    isError,
  } = useChaptersQuery({ subjectId: subjectId! }, { skip: !subjectId });

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Alert status="error">Error loading subjects</Alert>;

  return (
    <Stack gap="2em" padding="2em 0">
      <Text fontSize="1.5rem" fontWeight={700}>
        {subjectName}
      </Text>
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        flexWrap="wrap"
        gap="1em"
      >
        {chapters!.data.map((chapter) => (
          <Stack
            key={`subject-${subjectId}-chapter-${chapter.id}`}
            direction="row"
            gap="0.75em"
            border="1px solid #d3d3d3"
            padding="1em"
          >
            <Image width="50px" height="50px" src={chapter.image_url} />
            <Stack alignItems="baseline">
              <Text fontSize="1.25rem" fontWeight={700}>
                {chapter.name}
              </Text>
              <Button
                variant="link"
                size="sm"
                colorScheme="red"
                onClick={() =>
                  navigate(`/chapters/${chapter.id}/topics`, {
                    state: { chapterName: chapter.name },
                  })
                }
              >
                View Topic
              </Button>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Chapters;
