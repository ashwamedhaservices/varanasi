import React from "react";
import { Heading, Avatar, Text, Flex } from "@chakra-ui/react";
import { useProfileDashboardQuery } from "../../redux-store/api";
import { setAccessToken } from "../../utils/auth";
import { useDispatch } from "react-redux";
import { resetAuth } from "../../redux-store/auth";
import { useNavigate } from "react-router-dom";

function Name() {
  const { data: profileDashboard } = useProfileDashboardQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken("");
    dispatch(resetAuth());
    navigate("/login"); 
  };

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <Flex
          direction="column"
          mb="4"
          boxShadow="10 10 10px rgb(118 63 236 / 70%)"
          bgGradient="linear(to-b, rgb(82 7 248 / 70%), white)"
          style={{
            width: "100%",
            height: 400,
            borderRadius: "50%",
            marginTop: -250,
            paddingLeft: 0,
            paddingRight: 0,
          }}
        ></Flex>
      </div>
      <Heading mb="4" textAlign="center" marginTop="-135" color="#6e6a6a">
        {profileDashboard?.data?.user?.full_name || "Loading..."}
      </Heading>
      <Flex justifyContent="center" alignItems="center">
        <Avatar
          name={profileDashboard?.data?.user?.full_name || "Loading..."}
          src="https://bit.ly/broken-link"
          size="xl"
          style={{ border: "1px solid #6e6a6a", padding: "30" }}
          boxShadow="0 0 10px rgba(255, 255, 255, 1)"
          marginTop="5"
        />
      </Flex>
      <Text
        mb="4"
        textAlign="center"
        color="#07b5ef"
        onClick={handleLogout}
        cursor="pointer"
      >
        Logout
      </Text>
    </>
  );
}

export default Name;
