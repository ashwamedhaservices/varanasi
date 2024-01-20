import React, { useState } from "react";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../Logo";
import { setAccessToken } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  setAccessToken as setToken,
  setLoggedIn,
  selectIsLoggedIn,
} from "../../redux-store/auth";
import { useProfileDashboardQuery } from "../../redux-store/api";

type MenuItemProps = {
  isLast?: boolean;
  to: string;
};

const NavItem: React.FC<React.PropsWithChildren<MenuItemProps>> = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Link to={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
};

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const { data: profileDashboard } = useProfileDashboardQuery(null, {
    skip: !isLoggedIn,
  });

  const handleLogout = () => {
    setAccessToken("");
    dispatch(setLoggedIn(false));
    dispatch(setToken(""));
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      alignItems="center"
      padding="1em"
      bgColor="blue.700"
      boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 8px"
      borderRadius="0 0 2em 2em"
    >
      <Stack direction="row" gap="1em" alignItems="center">
        <Box width="50px" height="50px">
          <Logo />
        </Box>
        <Text fontSize="1.5rem" fontWeight="700" color="white">
          Ashwamedha
        </Text>
      </Stack>

      <Stack
        spacing={8}
        alignItems="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        {!isLoggedIn && (
          <Menu>
            <MenuButton color="white" onClick={handleLoginClick}>
              <Text fontWeight={700} fontSize="1.25rem">
                Login
              </Text>
            </MenuButton>
          </Menu>
        )}

        {isLoggedIn && (
          <>
            <Menu>
              <MenuButton color="white" onClick={handleDashboardClick}>
                <Text fontWeight={700} fontSize="1.25rem">
                  Continue Learning
                </Text>
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton color="white">
                <Stack direction="row" gap="0.5em" alignItems="center">
                  <Avatar size="md" bg="yellow.400" />
                  <Text
                    fontWeight={700}
                    fontSize="1.25rem"
                    maxWidth="150px"
                    overflow="hidden"
                    textOverflow="ellipsis"
                    whiteSpace="nowrap"
                  >
                    Hey {profileDashboard?.data?.user?.full_name}
                  </Text>
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
