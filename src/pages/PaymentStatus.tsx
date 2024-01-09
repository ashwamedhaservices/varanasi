import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";

const PaymentStatus = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const orderId = searchParams.get("order_id");
  const status = searchParams.get("status");
  const amount = searchParams.get("amount");

  return (
    <Stack
      gap="2em"
      padding="2em"
      border="1px solid #d3d3d3"
      borderRadius="0.5em"
      alignItems="center"
    >
      <Text fontSize="2rem" fontWeight={700}>
        Payment Status
      </Text>

      <Stack direction="row" gap="2em">
        <Text fontSize="1.25rem" fontWeight={700}>
          Order Id
        </Text>
        <Text fontSize="1.25rem">{orderId}</Text>
      </Stack>

      <Stack direction="row" gap="2em">
        <Text fontSize="1.25rem" fontWeight={700}>
          Status
        </Text>
        <Text fontSize="1.25rem">{status}</Text>
      </Stack>

      <Stack direction="row" gap="2em">
        <Text fontSize="1.25rem" fontWeight={700}>
          Amount
        </Text>
        <Text fontSize="1.25rem">{amount}</Text>
      </Stack>
    </Stack>
  );
};

export default PaymentStatus;
