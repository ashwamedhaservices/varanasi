import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import Name from "./Name";
import ProfilePage from "./ProfilePage";
import Wallet from "./Wallet";
import { Icon, Tab, TabList, Tabs } from "@chakra-ui/react";
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
        </>
      )}
    </Container>
  );
};

export default Profile;
