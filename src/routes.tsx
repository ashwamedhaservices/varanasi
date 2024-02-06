import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./components/layouts/GeneralLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentStatus from "./pages/PaymentStatus";
import Privacy from "./pages/Privacy";

const Home = lazy(() => import("./pages/Home"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./components/profile/Profile"));
const Courses = lazy(() => import("./pages/Courses"));
const Chapters = lazy(() => import("./pages/Chapters"));
const Topics = lazy(() => import("./pages/Topics"));
const Quiz = lazy(() => import("./pages/Quiz"));

const routes = [
  {
    path: "/",
    element: <GeneralLayout isPrivate={false} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
    ],
  },
  {
    path: "/",
    element: <GeneralLayout isPrivate={true} />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
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
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/subscribe",
        element: <Payment />,
      },
      {
        path: "/hdfc_payment_status",
        element: <PaymentStatus />,
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
  {
    path: "/privacy",
    element: <Privacy />,
  },
];

const Routes = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Routes;
