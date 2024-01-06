import {
  Box,
  Text,
  Button,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Icon,
  
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { useProfileDashboardQuery } from "../../redux-store/api";
function Wallet() {
  const { data: profileDashboard } = useProfileDashboardQuery();

  return (
    <>
      <Box p="6">
        <Accordion allowToggle marginTop="-12">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1">
                  <Flex alignItems="center" marginBlockStart="1">
                    <Icon
                      as={PlusSquareIcon}
                      boxSize={5}
                      color="#6e6a6a"
                      ml="-2"
                    />
                    <Text marginLeft="30">Wallet information</Text>
                  </Flex>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>

            <AccordionPanel pb={4}>
              <Flex justifyContent="space-between" alignItems="center">
                <p>Balance</p>
                <p>₹{profileDashboard?.data?.user?.wallet_info?.balance}</p>
              </Flex>

              <Flex justifyContent="space-between" alignItems="center">
                <p>Withdraw amount</p>
                <p>
                  ₹
                  {
                    profileDashboard?.data?.user?.wallet_info
                      ?.withdrawable_amount
                  }
                </p>
              </Flex>

              <Flex justifyContent="space-between" alignItems="center">
                <p>Processing Amount</p>
                <p>₹{profileDashboard?.data?.user?.wallet_info?.processing}</p>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb="4"
        >
          <Button
            backgroundColor="#769cf4"
            marginTop="30"
            color="white"
            size="lg"
            borderRadius="15"
          >
            Pay Now
          </Button>
        </Flex>
      </Box>
      <Text
        bgColor="#d6c6f9"
        p="4"
        color="#000"
        marginTop="-4"
        textAlign="center"
        borderRadius="5"
      >
        Account subscription pending
      </Text>
      
    </>
  );
}

export default Wallet;
