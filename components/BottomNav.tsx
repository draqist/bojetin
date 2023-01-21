import { Box, Flex, Grid, Link, Text, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { BiHomeAlt } from "react-icons/bi";
import { BsPersonBadge } from "react-icons/bs";
import { MdOutlineInsertChartOutlined, MdOutlineSavings } from "react-icons/md";

export default function BottomNav() {
  const { bgcolor, text } = useTheme();
  const router = useRouter();
  let activeStyle = {
    color: "#054e05b8",
    fill: "#054e05b8",
    fontWeight: 400,
    transition: "all 0.2 ease-in",
  };
  let dormantStyle = {
    dorm_color: "#1e1e2b50",
    fontWeight: 700,
    fill: "#DCDCDC",
  };
  const { color } = activeStyle;
  const { dorm_color } = dormantStyle;

  return (
    <Grid
      templateColumns="repeat(4, 1fr)"
      alignItems={"center"}
      gap={6}
      h="65px"
      pos="absolute"
      left="0"
      right="0"
      zIndex="30"
      bottom="0"
      minW="100vw"
      w="100vw"
      bg={bgcolor}
      boxShadow="0 1px 3px 0 rgba(0,0,0,.4),0 1px 2px 0 rgba(0,0,0,.24)"
    >
      <Link
        _hover={{
          textDecoration: "none",
        }}
        as={NextLink}
        href="/"
        color={router.pathname == "/" ? color : dorm_color}
      >
        <Flex direction={"column"} w="100%" justifyContent="center" alignItems={"center"}>
          <BiHomeAlt fontSize="24px" />
          <Text fontSize="12px" as={"span"} pt="1px">
            Home
          </Text>
        </Flex>
      </Link>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        as={NextLink}
        href="/savings"
        color={router.pathname == "/savings" ? color : dorm_color}
      >
        <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
          <MdOutlineSavings fontSize={"24px"} />
          <Text fontSize="12px" as={"span"}>
            Savings
          </Text>
        </Flex>
      </Link>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        as={NextLink}
        href="/expenses"
        color={router.pathname == "/expenses" ? color : dorm_color}
      >
        <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
          <MdOutlineInsertChartOutlined fontSize={"24px"} />
          <Text fontSize="12px" as={"span"}>
            Expenses
          </Text>
        </Flex>
      </Link>
      <Link
        _hover={{
          textDecoration: "none",
        }}
        as={NextLink}
        href="/account"
        color={router.pathname == "/account" ? color : dorm_color}
      >
        <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
          <BsPersonBadge fontSize={"24px"} />
          <Text fontSize="12px" as={"span"}>
            Account
          </Text>
        </Flex>
      </Link>
    </Grid>
  );
}
