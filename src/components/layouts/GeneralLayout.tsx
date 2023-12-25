import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer';
import { Outlet } from 'react-router-dom';

const GeneralLayout: React.FC<React.PropsWithChildren> = ({ children }) => {

    return (
        <Box width='100%' maxWidth='1104px' margin='auto' height='100%'>
            <Header />
                <React.Suspense fallback='Loading...'>
                    {children}
                    <Outlet />
                </React.Suspense>
            <Footer />
        </Box>
    )
};

export default GeneralLayout;
