import React from "react";
import { Button, Stack, Text } from "@chakra-ui/react";

type ComponentProps = {
  handleStart: () => void;
};

const QuizHome: React.FC<ComponentProps> = ({ handleStart }) => {
  return (
    <Stack gap="2em" padding="1em 0">
      <Stack direction="row" justifyContent="space-between">
        <Text fontSize="2rem" fontWeight={700}>
          Quiz Heading
        </Text>

        <Button colorScheme="blue" onClick={handleStart}>
          Start Quiz
        </Button>
      </Stack>
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="2rem" fontWeight={700}>
          Ready for Quiz?
        </Text>
        <Text fontSize="1.25rem">
          Test yourself on the skills in this course and earn mastery points for
          what you already know
        </Text>
        <Text fontWeight={700}>10 questions</Text>
        <Button colorScheme="blue" onClick={handleStart}>
          Start Quiz
        </Button>
      </Stack>
    </Stack>
  );
};

export default QuizHome;
