import React, { ChangeEvent, useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Logo } from "../Logo";
import { setAccessToken } from "../utils/auth";
import { useLoginMutation } from "../redux-store/api";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../redux-store/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [login] = useLoginMutation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((oldVal) => ({ ...oldVal, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const body = {
        users: {
          mobile_number: formData.username,
          password: formData.password,
        },
      };

      const res = await login(body);

      if ("error" in res) throw res.error;

      setAccessToken(res.data.data.attributes.token);
      dispatch(setLoggedIn(true));
      navigate("/dashboard");
    } catch (error) {
      console.debug(error);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      gap="2em"
    >
      <Logo height="100px" width="100px" />
      <Text fontSize="1.5rem" fontWeight={700}>
        Ashwamedha
      </Text>
      <Text>Sign in to your account to continue learning</Text>
      <Box
        bg="blackAlpha.50"
        borderRadius="0.5em"
        display="flex"
        flexDirection="column"
        gap="2em"
        alignItems="center"
        width="50%"
        padding="2em"
      >
        <Input
          placeholder="Username"
          value={formData.username}
          width="100%"
          name="username"
          onChange={handleChange}
          bgColor="white"
        />
        <Input
          placeholder="Password"
          value={formData.password}
          type="password"
          name="password"
          onChange={handleChange}
          bgColor="white"
        />
        <Button width="100%" colorScheme="blue" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
