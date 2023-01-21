import { Box, Button, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();
  return (
    <Box w="100%" h="100vh" bgColor="#0B0F12" pt="20px" px="14px">
      <Box py="20px" w="full" borderRadius="14px" bgColor="green.400">
        <Center w="full">
          <Image src="/expense.png" h="380px" objectFit={"contain"} />
        </Center>
        <Box px="20px" mt="24px">
          <Heading color={"#ffffffda"} fontSize="20px">
            {" "}
            $ave up for your goal$ easily....{" "}
          </Heading>
        </Box>
      </Box>

      <Box mt="48px" mb="30px" fontFamily={"DM Mono"}>
        <Text color="whiteAlpha.400"> Easy management </Text>
        <Heading color="#939394" mt="10px">
          {" "}
          Spend, save and track all your expenses{" "}
        </Heading>
      </Box>
      <Link as={NextLink} _hover={{ textDecoration: "none" }} href="/auth/register">
        <Button w="full" boxShadow={"md"} color="black" bgColor="whiteAlpha.900" borderRadius="10px" h="46px">
          {" "}
          Get Started{" "}
        </Button>
      </Link>
    </Box>
  );
}
