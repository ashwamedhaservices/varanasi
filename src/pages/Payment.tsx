import { Text, Button, Stack, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import {
  useCreatePaymentMutation,
  useSubscriptionStatusQuery,
} from "../redux-store/api/components/payment";

const Payment = () => {
  const [paymentLoading, setPaymentLoading] = useState(false);

  const {
    data: subscriptionStatus,
    isLoading,
    isError,
  } = useSubscriptionStatusQuery();

  const [createPayment] = useCreatePaymentMutation();

  const handlePayment = async () => {
    try {
      const res = await createPayment();

      if ("error" in res) throw res.error;

      const form = document.createElement("form");
      form.method = "POST";
      form.action = res?.data?.data?.url;

      // Add hidden input fields for each parameter
      const input1 = document.createElement("input");
      input1.type = "hidden";
      input1.name = "encRequest";
      input1.value = res?.data?.data?.enc_data;
      form.appendChild(input1);

      const input2 = document.createElement("input");
      input2.type = "hidden";
      input2.name = "access_code";
      input2.value = res?.data?.data?.api_key;
      form.appendChild(input2);

      // Add the form to the document body
      document.body.appendChild(form);

      form.submit();
    } catch (err) {
      console.error(err);
    }
  };

  const subscriptionStatusText = subscriptionStatus?.data
    ? "Subscribed"
    : "Subscription Pending";

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <Stack gap="1em" width="90%" margin="auto" alignItems="center">
      <Box width="100%" bgColor="purple.100" textAlign="center">
        <Text
          color="blue"
          padding="1em"
          fontSize="1.125rem"
          textColor="purple.700"
        >
          {subscriptionStatusText}
        </Text>
      </Box>
      {!subscriptionStatus?.data && (
        <Button
          disabled={paymentLoading}
          onClick={handlePayment}
          size="lg"
          colorScheme="blue"
        >
          Pay now
        </Button>
      )}
    </Stack>
  );
};

export default Payment;
