import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Alert, Button, Image, Stack, Text } from "@chakra-ui/react";
import { useTopicsQuery } from "../redux-store/api/components/courses";
import { ITopicItem } from "../types/api/response/courses";
import ReactPlayer from "react-player";

const Topics = () => {
  const { chapterId } = useParams();

  const [selectedTopic, setSelectedTopic] = useState<ITopicItem | null>(null);

  const location = useLocation();

  const chapterName = location.state.chapterName;

  const {
    data: topics,
    isLoading,
    isError,
  } = useTopicsQuery({ chapterId: chapterId! }, { skip: !chapterId });

  if (isLoading) return <Text>Loading...</Text>;

  if (isError) return <Alert status="error">Error loading topics</Alert>;

  return (
    <Stack gap="2em" padding="2em 0">
      <Text fontSize="1.5rem" fontWeight={700}>
        {chapterName}
      </Text>

      <Stack gap="1em">
        <Stack direction="row" gap="1em" overflow="auto">
          {topics!.data.map((topic) => (
            <Stack
              key={`chapter-${chapterId}-topic-${topic.id}`}
              gap="1em"
              direction="row"
              padding="1em"
              border="1px solid #d3d3d3"
              cursor="pointer"
              onClick={() => setSelectedTopic(topic)}
              bgColor={selectedTopic?.id === topic.id ? "pink.100" : ""}
            >
              <Image width="50px" height="50px" src={topic.image_url} />
              <Text fontSize="1.25rem" fontWeight={700}>
                {topic.name}
              </Text>
            </Stack>
          ))}
        </Stack>
        {selectedTopic && (
          <Stack padding="1em" border="1px solid #d3d3d3" gap="1em">
            <ReactPlayer
              width="640"
              height="450"
              controls
              url={selectedTopic?.streaming_url}
            />
            <Button width="100%" colorScheme="blue">
              View Notes
            </Button>
            <Text fontSize="1.25rem" fontWeight={700} color="blue.900">
              {selectedTopic.name}
            </Text>
            <Text fontSize="1.125rem">{selectedTopic.description}</Text>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

export default Topics;
