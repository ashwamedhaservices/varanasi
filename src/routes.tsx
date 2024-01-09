import React, { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneralLayout from "./components/layouts/GeneralLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PaymentStatus from "./pages/PaymentStatus";

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
      {
        path: "/profile",
        element: <Payment />,
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
];

const Routes = () => {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default Routes;
