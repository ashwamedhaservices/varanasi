import { Box, Button, Checkbox, Stack, Tag, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";

const MultiSelectionQuestion = () => {
  const [value, setValue] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue((oldVal) => [...oldVal, e.target.value]);
    } else {
      setValue((oldVal) => [...oldVal].filter((i) => i !== e.target.value));
    }
  };

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
          <Tag>Multiple Selection</Tag>
        </Box>
        <Text fontSize="1.5rem" fontWeight={700}>
          Sample question 2 with Multi Select Answers?
        </Text>
        <Stack gap="1em">
          <Checkbox
            checked={value.includes("option-1")}
            value="option-1"
            onChange={handleChange}
          >
            Option 1
          </Checkbox>
          <Checkbox
            checked={value.includes("option-2")}
            value="option-2"
            onChange={handleChange}
          >
            Option 2
          </Checkbox>
          <Checkbox
            checked={value.includes("option-3")}
            value="option-3"
            onChange={handleChange}
          >
            Option 3
          </Checkbox>
        </Stack>
      </Stack>
      <Stack direction="row">
        <Button
          variant="outline"
          colorScheme="red"
          onClick={() => setValue([])}
        >
          Reset
        </Button>
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </Stack>
  );
};

export default MultiSelectionQuestion;
