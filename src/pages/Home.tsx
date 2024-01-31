import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import {
  BannerImage,
  CoursesLogo,
  QualifiedTutorsLogo,
  ReferLogo,
  SaveLogo,
} from "../assets/home";

const Home = () => {
  return (
    <Stack gap="20px">
      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        height="600px"
        padding="1em"
        background="linear-gradient(180deg,#7B6FF2 0%,#7B6FF2 15%,rgba(132,117,236,0.71) 45%,#7B6FF2 75%,rgba(132,117,236,0.71) 100%)"
      >
        <Stack direction="column" justifyContent="center" width="50%">
          <Text fontSize="2.5rem" color="#fff" fontWeight={700}>
            Learn, earn & refer
          </Text>
          <Text fontSize="1.5rem" color="white">
            This is your year to refer & earn, with hassle free educational
            content
          </Text>
        </Stack>
        <Stack justifyContent="center">
          <Image height="450px" src={BannerImage} />
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        padding="1em"
      >
        <Stack
          direction="column"
          justifyContent="center"
          width="25%"
          padding="1em"
          alignItems="center"
          borderRight="1px solid #7B6FF2"
        >
          <Image src={CoursesLogo} height="100px" width="100px" />
          <Text fontSize="1.5rem" color="#7B6FF2">
            1000+ courses in 4+ languages
          </Text>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          width="25%"
          padding="1em"
          alignItems="center"
          borderRight="1px solid #7B6FF2"
        >
          <Image src={QualifiedTutorsLogo} height="100px" width="100px" />
          <Text fontSize="1.5rem" color="#7B6FF2">
            Qualified tutors
          </Text>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          width="25%"
          padding="1em"
          alignItems="center"
          borderRight="1px solid #7B6FF2"
        >
          <Image src={ReferLogo} height="100px" width="100px" />
          <Text fontSize="1.5rem" color="#7B6FF2">
            Refer to your peers and earn
          </Text>
        </Stack>

        <Stack
          direction="column"
          justifyContent="center"
          width="25%"
          padding="1em"
          alignItems="center"
        >
          <Image src={SaveLogo} height="100px" width="100px" />
          <Text fontSize="1.5rem" color="#7B6FF2">
            Find, save, learn, pick up again
          </Text>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        width="100%"
        height="300px"
        padding="3em"
        background="#8C82EF"
      >
        <Stack direction="column" justifyContent="center" width="50%">
          <Text fontSize="1.5rem" color="white" fontWeight={700}>
            Address:
          </Text>
          <Text fontSize="1.5rem" color="white">
            No.9 & 22 Bohara Heights
          </Text>
          <Text fontSize="1.5rem" color="white">
            1st floor Tumkur Road
          </Text>
          <Text fontSize="1.5rem" color="white">
            Bengaluru - 560057
          </Text>
        </Stack>
        <Stack direction="column" justifyContent="center" width="50%">
          <Text fontSize="1.5rem" color="white" fontWeight={700}>
            Contact Us:
          </Text>
          <Text fontSize="1.5rem" color="white">
            +91 - 9535600427
          </Text>
          <Text fontSize="1.5rem" color="white">
            ashwamedhaka@gmail.com
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
