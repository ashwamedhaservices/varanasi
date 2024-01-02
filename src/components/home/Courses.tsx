import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

const CategoryItems = ({ data }: { data: any[] }) => {
  const navigate = useNavigate();

  const handleClick = (id: number, name: string) => {
    navigate(`/courses/${id}`, {
      state: {
        courseName: name,
      },
    });
  };

  return (
    <Stack direction="row" gap="1em">
      {data.map((item) => (
        <Box
          border="1px solid gray"
          padding="1em"
          borderRadius="1em"
          minWidth="fit-content"
        >
          <Stack
            direction="row"
            gap="0.5em"
            alignItems="center"
            cursor="pointer"
            onClick={() => handleClick(item.id, item.name)}
          >
            <Image src={item.image_url} height="50px" width="60px" />
            <Box whiteSpace="nowrap">{item.name}</Box>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

type ComponentProps = {
  data: {
    [key: string]: any[];
  };
};

const Courses: React.FC<ComponentProps> = ({ data }) => {
  return (
    <Stack gap="1em">
      <Text fontWeight={700} fontSize="1.25rem">
        Courses
      </Text>
      <Tabs>
        <TabList>
          {Object.keys(data).map((category) => (
            <Tab key={`course-category-${category}`}>{category}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.values(data).map((categoryData, index) => (
            <TabPanel key={`course-category-detail-${index}`} overflowX="auto">
              <CategoryItems data={categoryData} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default Courses;
