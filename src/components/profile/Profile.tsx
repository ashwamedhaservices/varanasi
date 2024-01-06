import { Container } from '@chakra-ui/react';
import Name from './Name';
import ProfilePage from './ProfilePage';
import Wallet from './Wallet';
import {
  Icon,
  Tab,
  TabPanel,
  TabList,
  Tabs,
  TabPanels,
} from "@chakra-ui/react";
import { FiHome, FiVideo, FiUser } from "react-icons/fi";
function Profile() {
  return (
    <Container>
     <Name/>
      <ProfilePage/>
      <Wallet/>
      
      <Tabs
        defaultIndex={1}
        isFitted
        variant="enclosed"
        bgColor="#ceedf5"
        color="#000"
        marginTop="4"
        borderRadius="5"
      >
        <TabPanels>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
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
    </Container>
    
  );
}

export default Profile;
