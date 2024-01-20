import { Box, ListItem, OrderedList, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Privacy = () => {
  return (
    <Stack gap="2em" maxWidth="80%" padding="1em 2em">
      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          Privacy Policy
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            Ashwamedha.net, we respect every individuals right to privacy. Our
            relationship with you is our most valuable asset and it’s the very
            basis of our Name and Reputation.
          </Text>

          <Text>
            We understand the importance you place on the privacy and security
            of information that personally identifies you and your account
            information.
          </Text>
          <Text>
            The privacy policy describes how your personal information is
            collected, used and shared when you visit or make a purchase
            Ashwamedha.net.
          </Text>
        </Stack>
      </Stack>

      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          Personal Information We Collect
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            When you visit the site be automatically collect certain information
            about your device including information about your web browser IP
            address time zone and some of the cookies that are installed on your
            device additionally as your browse site we collect the information
            about the individual website what products that you will what
            website or search terms referred you to the site and information
            about how you interact with the site we refer to this automatically
            collected information as device information.
          </Text>
        </Stack>
      </Stack>

      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          Cookies
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            Cookies are the data file that are placed on your device or computer
            and often include an anonymous unique identifier for more
            information about cookies and how to disable cookies visit
            allaboutcookies.org
          </Text>
        </Stack>
      </Stack>

      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          Additional Information
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            Additionally when you make purchase or attempt to make a purchase
            through a site we collect certain information from you including
            your name, billing address, shipping address, payment information,
            email address and phone number . We refer to this information as
            “order information”
          </Text>
        </Stack>
      </Stack>

      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          Additional Information
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            We do not store your credit card number information or ATM card, net
            banking, or cash card information or any such payment information
            when you purchase goods or services from us. Our payment information
            is secured enough we have payment service provider payumoney.com.
          </Text>

          <Text>
            When we talk about personal information in this privacy policy we
            are talking about both “device information” and “order information”
          </Text>
        </Stack>
      </Stack>

      <Stack gap="1.5em">
        <Text fontWeight={700} fontSize="2rem">
          How do we use your personal information?
        </Text>
        <Stack gap="0.75em" fontWeight={500} marginLeft="10%" fontSize="1.5rem">
          <Text>
            We use the order information that we collect generally to fulfill
            any orders placed through the site (including processing your
            payment information, arranging for shipping ,and providing you with
            invoices and / or order confirmation) additional we use this order
            information to:
          </Text>

          <OrderedList>
            <ListItem>
              <Text fontWeight={700}>Communicate with you:</Text>
              <Text>
                We use the device information that we collect to help us screen
                for potential risk and fraud( in particular your IP address),
                and more generally to improve and optimize our site (for example
                by generating Analytics about how our customer browse and
                interact with the site, and to assess the success of our
                marketing and Advertising campaigns)
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight={700}>Sharing your personal information:</Text>
              <Text>
                We use Google Analytics to help us understand how our customers
                use the site you can read more about how Google uses your
                personal information at google.com/intl/en/policies/privacy.
              </Text>
              <Text>
                Finally we may also share your personal information to comply
                with applicable laws and regulations to respond to a subpoena,
                Search warrant or other lawful request for the information we
                receive or otherwise protect our rights.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontWeight={700}>Behavioral advertising:</Text>
              <Text>
                As described above we use your personal information to keep you
                with targeted advertisement or marketing Communications we
                believe May Be of interest to you.
              </Text>
              <Text>
                For more information about how to target advertising works you
                can visit the network advertising initiatives educational page
                at www.networkadvertising.org understanding
                -online-advertising/how-does-it-work.
              </Text>
              <Text>
                You can opt out of targeted advertising by: Facebook
                http://www.facebook.com/settings/?tab=ads
              </Text>
              <Text>Google http://www.google.com/settings/ads/anonymous</Text>
            </ListItem>
          </OrderedList>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Privacy;
