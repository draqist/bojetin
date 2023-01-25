import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import ActivityCard from "../components/ActivityCard";
import AppLayout from "../components/AppLayout";
import { useTheme } from "../data";

export default function Expenses() {
  const { text } = useTheme();
  return (
    <AppLayout>
      <Flex alignItems={"flex-end"} justifyContent="space-between" h="60px" color={text}>
        <Box>
          <Heading fontSize="24px" color={"gray.600"}>
            {" "}
            Expenses,{" "}
          </Heading>
          <Text letterSpacing={0} fontSize="12px">Here's what you have spent so far</Text>
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
            Monthly Expense
          </Text>
          <Heading mt="8px" fontSize="36px" color="#f10909b8" letterSpacing={"wider"}>
            ₦100,000.00
          </Heading>
        </Box>
      </Box>
      <Box>
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          Recent Expenses
        </Text>
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
      </Box>
    </AppLayout>
  );
}
