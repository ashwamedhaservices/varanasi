import { Box } from '@chakra-ui/react';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectRedirectPath } from '../../redux-store/auth';

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const redirectPath = useSelector(selectRedirectPath);

    if (isLoggedIn) return <Navigate to={redirectPath} replace />;

    return (
        <Box width='100%' maxWidth='1104px' margin='auto' height='100%' minHeight='100vh'>
            <React.Suspense fallback='Loading...'>
                {children}
                <Outlet />
            </React.Suspense>
        </Box>
    )
};

export default AuthLayout;
