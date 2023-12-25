import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Logo } from '../../Logo';

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
    return (
        <Box display='flex' justifyContent='space-between' width='100%'>
            <Box width='100px' height='100px'><Logo /></Box>
            <Stack spacing={8} align="center" justify={["center", "space-between", "flex-end", "flex-end"]} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
                <MenuItem to='/'>Home</MenuItem>
                <MenuItem to='/courses'>Courses</MenuItem>
            </Stack>
        </Box>
    )
};

export default Header;
