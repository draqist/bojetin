import { Avatar, Box, Flex, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import ActivityCard from "../components/ActivityCard";
import AppLayout from "../components/AppLayout";
import { useTheme } from "../data";

export default function Savings() {
  const { text } = useTheme();
  return (
    <AppLayout>
      <Flex alignItems={"flex-end"} justifyContent="space-between" h="60px" color={text}>
        <Box>
          <Heading fontSize="24px" color={"gray.600"}>
            {" "}
            Savings{" "}
          </Heading>
          <Text fontSize="12px">Check up on your saving progress</Text>
        </Box>
        <Link as={NextLink} href="/account" _hover={{ textDecoration: "none" }}>
          <Avatar name="Abdullah Abdulfatah " src={"https://bit.ly/kent-c-dodds"} size="md" />
        </Link>
      </Flex>
      <Box my="24px">
        <Box
          // h="120px"
          my="2.5rem"
          p="1rem"
          borderTopRadius={"8px"}
          borderBottomRightRadius="8px"
          border="1px solid #e2e8f0"
          boxShadow="sm"
        >
          <Text fontWeight={"400"} color="gray.600" fontSize="14px" textTransform={"uppercase"}>
            {" "}
            Total Balance
          </Text>
          <Heading mt="8px" fontSize="36px" color="#088fadb8" letterSpacing={"wider"}>
            ₦100,000.00
          </Heading>
        </Box>
      </Box>
      <Box mb="1.75rem">
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          GET TO SAVING
        </Text>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Flex
            justifyContent={"space-between"}
            alignItems="flex-end"
            w="full"
            direction="column"
            borderRadius=".5rem"
            bgColor="#088fad36"
            h="120px"
            p="18px"
            py="10px"
          >
            <Box>
              <Heading color="gray.500" fontSize={"22px"}>
                {" "}
                Toss a coin into your wallet{" "}
              </Heading>
            </Box>
            <Box w="78px" marginTop={-8}>
              <Image src="/coin1.png" alt="saving icon" />
            </Box>
          </Flex>
        </Link>
      </Box>
      <Box>
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          saving Activities
        </Text>
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
      </Box>
    </AppLayout>
  );
}
