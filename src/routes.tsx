import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./components/layouts/GeneralLayout";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux-store/auth";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";

const Home = lazy(() => import("./pages/Home"));
const Courses = lazy(() => import("./pages/Courses"));
const Chapters = lazy(() => import("./pages/Chapters"));
const Topics = lazy(() => import("./pages/Topics"));

const routes = [
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses/:courseId",
        element: <Courses />,
      },
      {
        path: "/subjects/:subjectId/chapters",
        element: <Chapters />,
      },
      {
        path: "/chapters/:chapterId/topics",
        element: <Topics />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

const Routes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Routes;
