import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "../../utils/auth";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://apistage.ashwamedha.net/staging",
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (payload) => ({
        url: "/api/v1/users/login.json",
        method: "POST",
        body: payload,
      }),
    }),
    profileDashboard: build.query<any, void | null>({
      query: () => ({
        url: "/api/v1/profiles/dashboard.json",
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useProfileDashboardQuery } = apiSlice;

export default apiSlice;
