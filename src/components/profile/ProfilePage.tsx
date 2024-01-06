import React from "react";
import { Box, Text, Flex, Icon, Button } from "@chakra-ui/react";
import {
  PhoneIcon,
  EmailIcon,
  LockIcon,
  CopyIcon,
  LinkIcon,
} from "@chakra-ui/icons";
import { useProfileDashboardQuery } from "../../redux-store/api";

const ProfilePage = () => {
  const { data: profileDashboard } = useProfileDashboardQuery();


  return (
    <Box p="6" marginTop="-10">
      <Flex borderBottom="1px solid #ddd" padding="5px" alignItems="center">
        <Flex alignItems="center" marginBlockStart="2">
          <Icon as={PhoneIcon} boxSize={5} color="#6e6a6a" mr="2" />
          <Text marginLeft="30">
            {profileDashboard?.data?.user?.mobile_number || "Loading..."}
          </Text>
        </Flex>
      </Flex>

      <Flex borderBottom="1px solid #ddd" padding="5px" alignItems="center">
        <Flex justifyContent="space-between" width="100%" alignItems="center">
          <Flex alignItems="center">
            <Icon as={CopyIcon} boxSize={5} color="#6e6a6a" mr="8" />
            <Text marginLeft="2">
              {profileDashboard?.data?.user?.referral_code || "Loading..."}
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Button color="#07b5ef" marginLeft="3" backgroundColor="white">
              Copy code
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Flex borderBottom="1px solid #ddd" padding="5px" alignItems="center">
        <Flex justifyContent="space-between" width="100%" alignItems="center">
          <Flex alignItems="center">
            <Icon as={LinkIcon} boxSize={5} color="#6e6a6a" mr="8" />
            <Text marginLeft="2">
              {profileDashboard?.data?.user?.referral_url}
            </Text>
          </Flex>
          <Button color="#07b5ef" marginLeft="3" backgroundColor="white">
            Copy link
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
