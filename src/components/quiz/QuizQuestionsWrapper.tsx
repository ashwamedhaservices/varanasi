import React from "react";
import {
  Button,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import SingleSelectionQuestion from "./SingleSelectionQuestion";
import MultiSelectionQuestion from "./MultiSelectionQuestion";

const QuizQuestionsWrapper = () => {
  return (
    <Stack gap="2em" padding="1em 0">
      <Tabs>
        <Stack>
          <Stack direction="row" justifyContent="space-between">
            <Text fontSize="2rem" fontWeight={700} whiteSpace="nowrap">
              Quiz Heading
            </Text>
            <Button colorScheme="red">End</Button>
          </Stack>
          <Stack
            width="100%"
            alignItems="center"
            padding="0.5em"
            bgColor="#eee"
          >
            <TabList>
              <Tab>1</Tab>
              <Tab>2</Tab>
              <Tab>3</Tab>
            </TabList>
          </Stack>
        </Stack>
        <TabPanels>
          <TabPanel>
            <SingleSelectionQuestion />
          </TabPanel>
          <TabPanel>
            <MultiSelectionQuestion />
          </TabPanel>
          <TabPanel>Question 3</TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default QuizQuestionsWrapper;
