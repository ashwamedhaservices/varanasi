import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Box display='flex' justifyContent='space-between' width='100%' position='fixed' bottom='0' maxWidth='1104px'>
            <Text>Footer Goes Here</Text>
            <Text>&copy; Ashwamedha 2024</Text>
        </Box>
    )
};

export default Footer;
