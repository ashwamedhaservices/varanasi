import React from 'react';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../Logo';
import { setAccessToken } from '../../utils/auth';
import { useDispatch } from 'react-redux';
import { resetAuth } from '../../redux-store/auth';

type MenuItemProps = {
    isLast?: boolean;
    to: string;
}

const MenuItem: React.FC<React.PropsWithChildren<MenuItemProps>> = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link to={to}>
        <Text display="block" {...rest}>
          {children}
        </Text>
      </Link>
    )
  }
  

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    setAccessToken('');
    dispatch(resetAuth());
    navigate('/login');
  };

  return (
      <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
          <Stack direction='row' gap='1em' alignItems='center'>
            <Box width='50px' height='50px'><Logo /></Box>
            <Text fontSize='1.5rem' fontWeight='700'>Ashwamedha</Text>
          </Stack>

          <Stack spacing={8} alignItems="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
              <MenuItem to='/'>Home</MenuItem>
              <MenuItem to='/courses'>Courses</MenuItem>
              <Button onClick={handleLogout}>Logout</Button>
          </Stack>
      </Box>
  )
};

export default Header;
