import { Avatar, Box, Button, Flex, Heading, Icon, Link, Text, useToast } from "@chakra-ui/react";
import { sendEmailVerification, signOut } from "firebase/auth";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsCreditCard2Back, BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import AppLayout from "../components/AppLayout";
import { useTheme } from "../data";
import { auth } from "../utils/firebase";

export default function Account() {
  const toast = useToast();
  const { text } = useTheme();
  let router = useRouter();
  const [displayName, setName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user?.emailVerified) {
        try {
          // @ts-ignore
          sendEmailVerification(user).then(() => {
            toast({
              title: "Verification required",
              description: "Kindly check your email to confirm your account",
              status: "warning",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
          });
        } catch (error) {
          toast({
            // @ts-ignore
            title: error.code,
            description: "Kindly check your email to confirm your account",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      }
      // @ts-ignore
      setName(user?.displayName);
    });
  }, [auth]);
  return (
    <AppLayout>
      <Flex alignItems={"flex-end"} justifyContent="space-between" h="60px" color={text}>
        <Box>
          <Heading fontSize="24px" color={"gray.600"}>
            {" "}
            Account Info{" "}
          </Heading>
          {/* <Text fontSize="12px"> {displayName}</Text> */}
          <Text fontSize="12px"> Abdullah Abdulfatah Omobolaji</Text>
        </Box>
        <Link as={NextLink} href="/account" _hover={{ textDecoration: "none" }}>
          <Avatar name="Abdullah Abdulfatah " src={"https://bit.ly/kent-c-dodds"} size="md" />
        </Link>
      </Flex>
      <Flex alignItems={"center"} justifyContent="center" my="48px" mb="30px" h="144px">
        {/* <Box
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
        </Box> */}
        <Avatar name="Abdullah Abdulfatah " src={"https://bit.ly/kent-c-dodds"} size="2xl" />
      </Flex>
      <Box mb="1.75rem">
        <Text fontSize="20px" lineHeight="1" color={"gray.600"} fontWeight="bold" pb="20px">
          {" "}
          Abdullah Abdulfatah Omobolaji
        </Text>
      </Box>
      <Box>
        <Flex
          mb="1rem"
          p="1rem"
          px="1.25rem"
          borderTopRadius={"8px"}
          borderBottomRightRadius="8px"
          border="1px solid #e2e8f0"
          boxShadow="sm"
        >
          <Icon as={IoPersonOutline} mr="1rem" fontSize={"20px"} />
          <Text fontWeight={"400"} color="gray.600" fontSize="12px">
            {" "}
            Account settings
          </Text>
        </Flex>
        <Flex
          mb="1rem"
          p="1rem"
          px="1.25rem"
          borderTopRadius={"8px"}
          borderBottomRightRadius="8px"
          border="1px solid #e2e8f0"
          boxShadow="sm"
        >
          <Icon as={BsCreditCard2Back} mr="1rem" fontSize={"20px"} />
          <Text fontWeight={"400"} color="gray.600" fontSize="12px">
            {" "}
            My Card & Banks
          </Text>
        </Flex>
        <Flex
          mb="1rem"
          p="1rem"
          px="1.25rem"
          borderTopRadius={"8px"}
          borderBottomRightRadius="8px"
          border="1px solid #e2e8f0"
          boxShadow="sm"
        >
          <Icon as={RiMoneyDollarCircleLine} mr="1rem" fontSize={"20px"} />
          <Text fontWeight={"400"} color="gray.600" fontSize="12px">
            {" "}
            Withdraw fund
          </Text>
        </Flex>
        <Flex
          mb="1rem"
          p="1rem"
          px="1.25rem"
          borderTopRadius={"8px"}
          borderBottomRightRadius="8px"
          border="1px solid #e2e8f0"
          boxShadow="sm"
        >
          <Icon as={BsTelephone} mr="1rem" fontSize={"20px"} />
          <Text fontWeight={"400"} color="gray.600" fontSize="12px">
            {" "}
            Contact us
          </Text>
        </Flex>
      </Box>
      <Button
        w="full"
        colorScheme="red"
        onClick={() => {
          signOut(auth).then(() => {
            toast({
              title: "Logged out successfully",
              description: "User logged out successfully",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
            router.push("/auth/login");
          });
        }}
      >
        Logout
      </Button>
    </AppLayout>
  );
}
