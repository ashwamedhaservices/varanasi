import {
  Box,
  Button,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SingleSelectionQuestion = () => {
  const [value, setValue] = useState("");

  return (
    <Stack
      gap="3em"
      padding="2em 6em"
      width="100%"
      height="100%"
      justifyContent="center"
    >
      <Stack gap="0.5em">
        <Box>
          <Tag>Single Selection</Tag>
        </Box>
        <Text fontSize="1.5rem" fontWeight={700}>
          Sample question 1 with Single Select Answers?
        </Text>
        <RadioGroup name="question-1" value={value} onChange={setValue}>
          <Stack gap="1em">
            <Radio value="option-1">Option 1</Radio>
            <Radio value="option-2">Option 2</Radio>
            <Radio value="option-3">Option 3</Radio>
          </Stack>
        </RadioGroup>
      </Stack>
      <Stack direction="row">
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => setValue("")}
        >
          Reset
        </Button>
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </Stack>
  );
};

export default SingleSelectionQuestion;
