import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();
  return (
    <Box w="100%" minH="100vh" bgColor="#0B0F12" pt="20px" px="14px">
      <Center w="full" minH="390px" h="500px" borderRadius="16px" mt="0px" bgColor="green.400"></Center>

      <Box my="40px" fontFamily={"DM Mono"}>
        <Text color="whiteAlpha.400"> Easy management </Text>
        <Heading color="#939394" mt="10px">
          {" "}
          Spend, save and track all your expenses{" "}
        </Heading>
      </Box>
      <Box mt="30px">
        <Button
          w="full"
          boxShadow={"md"}
          color="black"
          bgColor="whiteAlpha.900"
          borderRadius="10px"
          h="46px"
          onClick={() => {
            router.push("/auth/register");
          }}
        >
          {" "}
          Get Started{" "}
        </Button>
      </Box>
    </Box>
  );
}
