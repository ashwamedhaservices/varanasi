import React from "react";
import { Box, Text, Flex, Icon, Button } from "@chakra-ui/react";
import {
  PhoneIcon,
  CopyIcon,
  LinkIcon,
} from "@chakra-ui/icons";
import { useProfileDashboardQuery } from "../../redux-store/api";

const ProfilePage = () => {
  const { data: profileDashboard } = useProfileDashboardQuery();

  const handleCopyCode = () => {
    const codeToCopy = profileDashboard?.data?.user?.referral_code || "";
    navigator.clipboard.writeText(codeToCopy);
  };

  const handleCopyLink = () => {
    const fullLink = profileDashboard?.data?.user?.referral_url || "";
    navigator.clipboard.writeText(fullLink);
  };

  const displayLink = profileDashboard?.data?.user?.referral_url?.slice(0, 20);

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
            <Button
              color="#07b5ef"
              marginLeft="20"
              backgroundColor="white"
              onClick={handleCopyCode}
            >
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
              {displayLink} 
            </Text>
          </Flex>
          <Button
            color="#07b5ef"
            marginLeft="3"
            backgroundColor="white"
            onClick={handleCopyLink}
          >
            Copy link
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProfilePage;
