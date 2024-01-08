import React, { useState } from 'react';
import { Container } from '@chakra-ui/react';
import Name from './Name';
import ProfilePage from './ProfilePage';
import Wallet from './Wallet';
import {
  Icon,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { FiHome, FiVideo, FiUser } from "react-icons/fi";

const Profile: React.FC = () => {
  const [isProfileVisible] = useState(true);

  return (
    <Container>
      {isProfileVisible && (
        <>
          <Name />
          <ProfilePage />
          <Wallet />

          <Tabs
            defaultIndex={2}
            isFitted
            variant="enclosed"
            bgColor="#ceedf5"
            color="#000"
            marginTop="4"
            padding='5'
            borderRadius="5"
          >
            <TabList>
              <Tab>
                <Icon as={FiHome} boxSize={10} mx="10%" />
              </Tab>
              <Tab>
                <Icon as={FiVideo} boxSize={10} mx="10%" />
              </Tab>
              <Tab>
                <Icon as={FiUser} boxSize={10} mx="10%" />
              </Tab>
            </TabList>
          </Tabs>
        </>
      )}
    </Container>
  );
}

export default Profile;
