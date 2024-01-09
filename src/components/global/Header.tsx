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
import { useDispatch } from "react-redux";
import { resetAuth } from "../../redux-store/auth";
import { useProfileDashboardQuery } from "../../redux-store/api";
import Profile from "../profile/Profile";

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
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const { data: profileDashboard } = useProfileDashboardQuery();

  const handleLogout = () => {
    setAccessToken("");
    dispatch(resetAuth());
    navigate("/login");
  };

  const handleProfileClick = () => {
    setIsProfileVisible(true);
  };

  return (
    <>
      {!isProfileVisible && (
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
            <Menu>
              <MenuButton color="white">
                <Stack direction="row" gap="0.5em" alignItems="center">
                  <Avatar size="lg" bg="yellow.400" />
                  <Stack>
                    <Text fontWeight={700} fontSize="1.25rem">
                      Hey {profileDashboard?.data?.user?.full_name}
                    </Text>
                    <Text fontSize="0.875rem">Your way to grow</Text>
                  </Stack>
                </Stack>
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Box>
      )}

      {isProfileVisible && <Profile />}
    </>
  );
};

export default Header;
