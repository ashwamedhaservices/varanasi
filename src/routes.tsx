import React, { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import GeneralLayout from './components/layouts/GeneralLayout';

const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import ('./pages/Courses'));

const routes = [{
    path: '/',
    element: <GeneralLayout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/courses',
            element: <Courses />
        }
    ]
}]

const Routes = () => {
    const router = createBrowserRouter(routes);

    return <RouterProvider router={router} />;
};

export default Routes;
