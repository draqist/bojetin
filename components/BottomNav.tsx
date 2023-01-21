import { Box, Flex, Grid, Link, Text, useTheme } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineInsertChartOutlined, MdOutlineSavings } from "react-icons/md";
import { BsPersonBadge } from "react-icons/bs";
import { useRouter } from "next/router";
import  NextLink  from "next/link";

export default function BottomNav() {
  const { bgcolor, text } = useTheme();
  const router = useRouter()
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
  const {color} = activeStyle;
  const {dorm_color} = dormantStyle;
  return (
    <Box pos="absolute" bottom="0" minW="100vw" w="100vw" borderTop={`1px dashed black`}>
      <Grid templateColumns="repeat(4, 1fr)" alignItems={"center"} gap={6} w="100%" h="65px">
        <Link as={NextLink} href="/" color={router.pathname == "/" ? color : dorm_color }>
          <Flex direction={"column"} w="100%" justifyContent="center" alignItems={"center"}>
            <BiHomeAlt fontSize="24px"/>
            <Text fontSize="12px" as={"span"} pt="1px">
              Home
            </Text>
          </Flex>
        </Link>
        <Link as={NextLink} href="/savings" color={router.pathname == "/savings" ? color : dorm_color}>
          <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
            <MdOutlineSavings fontSize={"24px"}/>
            <Text fontSize="12px" as={"span"}>
              Savings
            </Text>
          </Flex>
        </Link>
        <Link as={NextLink} href="/expenses" color={router.pathname == "/expenses" ? color : dorm_color}>
          <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
            <MdOutlineInsertChartOutlined fontSize={"24px"}/>
            <Text fontSize="12px" as={"span"}>
              Expenses
            </Text>
          </Flex>
        </Link>
        <Link as={NextLink} href="/account" color={router.pathname == "/account" ? color : dorm_color}>
          <Flex justifyContent={"center"} alignItems="center" direction="column" w="100%">
            <BsPersonBadge fontSize={"24px"}/>
            <Text fontSize="12px" as={"span"}>
              Account
            </Text>
          </Flex>
        </Link>
      </Grid>
    </Box>
  );
}
