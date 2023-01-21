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
          {/* <MdOutlineSavings fontSize={"24px"} /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={router.pathname == "/savings" ? color : dorm_color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2301 2.52999L14.8801 2.87999C14.4907 3.2649 14.214 3.74906 14.0801 4.27999C12.3759 3.81958 10.5674 3.93505 8.93554 4.60845C7.30373 5.28184 5.94007 6.47543 5.05653 8.00371C4.17299 9.53198 3.81905 11.3093 4.04973 13.0595C4.28042 14.8096 5.08279 16.4346 6.33215 17.6817C7.58151 18.9289 9.20787 19.7284 10.9584 19.9559C12.709 20.1835 14.4857 19.8264 16.0124 18.9402C17.5391 18.0539 18.7303 16.6881 19.4008 15.0551C20.0713 13.4221 20.1835 11.6134 19.7201 9.90999C20.25 9.77891 20.734 9.50577 21.1201 9.11999L21.4701 8.76999C21.9864 10.2758 22.1354 11.8832 21.9046 13.4582C21.6738 15.0332 21.07 16.5303 20.1435 17.8247C19.217 19.1191 17.9945 20.1734 16.578 20.8996C15.1615 21.6259 13.592 22.0032 12.0001 22C10.5499 21.9974 9.11763 21.6795 7.80257 21.0682C6.4875 20.4569 5.32113 19.5669 4.38432 18.4599C3.44752 17.3528 2.76269 16.0553 2.37734 14.6573C1.99198 13.2592 1.91532 11.7941 2.15265 10.3634C2.38999 8.93276 2.93566 7.57086 3.75181 6.37212C4.56797 5.17338 5.63508 4.1665 6.87916 3.4213C8.12325 2.67609 9.51453 2.21039 10.9565 2.05648C12.3985 1.90257 13.8568 2.06414 15.2301 2.52999ZM13.5501 6.19999L11.7501 7.99999C10.982 8.04776 10.244 8.31609 9.62461 8.7728C9.0052 9.2295 8.53069 9.8552 8.25799 10.5748C7.98528 11.2945 7.92596 12.0775 8.08713 12.83C8.24831 13.5825 8.62314 14.2726 9.16667 14.8174C9.7102 15.3622 10.3994 15.7386 11.1515 15.9016C11.9036 16.0645 12.6868 16.007 13.407 15.736C14.1273 15.465 14.7541 14.992 15.2123 14.3737C15.6705 13.7553 15.9405 13.018 15.9901 12.25L17.7901 10.45C18.13 11.7261 18.0394 13.0788 17.5322 14.2982C17.0251 15.5176 16.1299 16.5356 14.9853 17.1944C13.8407 17.8532 12.5107 18.1159 11.2016 17.9419C9.89247 17.7679 8.67733 17.1668 7.7446 16.2318C6.81187 15.2969 6.21365 14.0804 6.04271 12.7708C5.87177 11.4613 6.13765 10.132 6.79914 8.98892C7.46062 7.84589 8.48074 6.95303 9.70133 6.44878C10.9219 5.94454 12.2748 5.85709 13.5501 6.19999Z"
              className="sc-EHOje ghzERX mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"
            ></path>
            <path
              d="M16 6.58999V4.99999C16.0038 4.73622 16.1116 4.48462 16.3 4.29999L18.3 2.29999C18.4398 2.16295 18.6167 2.06994 18.8088 2.0325C19.001 1.99506 19.1999 2.01483 19.3809 2.08936C19.5619 2.16389 19.717 2.2899 19.8271 2.45178C19.9371 2.61365 19.9973 2.80427 20 2.99999V3.99999H21C21.1958 4.00274 21.3864 4.06287 21.5482 4.17293C21.7101 4.28299 21.8361 4.43814 21.9107 4.61914C21.9852 4.80015 22.005 4.99904 21.9675 5.19117C21.9301 5.3833 21.8371 5.56022 21.7 5.69999L19.7 7.69999C19.5154 7.88841 19.2638 7.99624 19 7.99999H17.41L12.71 12.7C12.5199 12.8653 12.2744 12.9527 12.0226 12.9448C11.7708 12.9369 11.5313 12.8343 11.3519 12.6574C11.1725 12.4805 11.0665 12.2425 11.055 11.9908C11.0435 11.7392 11.1275 11.4924 11.29 11.3L16 6.57999V6.58999Z"
              className="sc-EHOje ghzERX mb-1 md:my-4 md:mr-2 text-lg w-6 h-6 md:w-6 md:h-6"
            ></path>
          </svg>
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
