import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Header from "../global/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { useProfileDashboardQuery } from "../../redux-store/api";
import { getAccessToken, setAccessToken } from "../../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, setAuth } from "../../redux-store/auth";

const GeneralLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const {
    data: profileDashboard,
    isLoading,
    isError,
    isSuccess,
  } = useProfileDashboardQuery(null, {
    skip: !getAccessToken(),
  });

  useEffect(() => {
    if (!isLoading && !isError && isSuccess && profileDashboard) {
      dispatch(
        setAuth({
          isLoggedIn: true,
          accessToken: getAccessToken(),
          redirectPath: "/",
        })
      );
    }

    if (!isLoading && (isError || !isLoggedIn)) {
      setAccessToken("");
      dispatch(
        setAuth({
          isLoggedIn: false,
          accessToken: "",
          redirectPath: window.location.pathname,
        })
      );
      navigate("/login");
    }
  }, [isLoading, isError, isSuccess, profileDashboard]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <Box width="100%" maxWidth="1104px" margin="auto" height="100%">
      <Header />
      <React.Suspense fallback="Loading...">
        <Box padding={{ base: "1.5em", lg: "1em" }}>
          {children}
          <Outlet />
        </Box>
      </React.Suspense>
    </Box>
  );
};

export default GeneralLayout;
