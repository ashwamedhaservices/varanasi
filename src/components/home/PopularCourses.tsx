import { Box, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getCardsBackground } from "../../utils/common-utils";

type ComponentProps = {
  data: any[];
};

const PopularCourses: React.FC<ComponentProps> = ({ data }) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) return null;

  const handleClick = (id: number, name: string) => {
    navigate(`/courses/${id}`, {
      state: {
        courseName: name,
      },
    });
  };

  return (
    <Stack direction="column" gap="1em">
      <Text fontSize="1.25rem" fontWeight={700}>
        Popular Courses
      </Text>

      <Stack direction="row" gap="2em" overflowX="auto">
        {data.map((item, index) => (
          <Stack
            key={`popular-course-${item.id}`}
            direction="column"
            gap="0.5em"
            alignItems="center"
            cursor="pointer"
            width="110px"
            onClick={() => handleClick(item.id, item.name)}
          >
            <Box
              padding="1em"
              borderRadius="50%"
              bgColor={getCardsBackground(index)}
            >
              <Image src={item.image_url} alt={item.name} width="50px" />
            </Box>
            <Text textAlign="center">{item.name}</Text>
            <Text fontSize="0.875rem" color="gray">
              {item.level}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default PopularCourses;
