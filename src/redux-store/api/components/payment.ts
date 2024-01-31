import { getAccessToken } from "../../../utils/auth";
import apiSlice from "../index";

const paymentApis = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    subscriptionStatus: build.query<any, void>({
      query: () => ({
        url: "/api/v1/users/subscribed.json",
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
    createPayment: build.mutation<any, void>({
      query: () => ({
        url: "/api/v2/payments.json",
        method: "POST",
        headers: {
          Authorization: getAccessToken() || "",
        },
      }),
    }),
  }),
});

export const { useSubscriptionStatusQuery, useCreatePaymentMutation } =
  paymentApis;
