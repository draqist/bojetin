import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();
  return (
    <Box w="100%" minH="100vh" bgColor="#0B0F12" pt="20px" px="14px">
      <Box py="20px" w="full" minH="390px" h="490px" borderRadius="16px" bgColor="green.400">
        <Image src="/images__1.png" objectFit={"contain"} />
        <Box px="20px" mt="24px">
          <Heading color={"#d7d7fa"} fontSize="20px">
            {" "}
            $ave up for your goal$ easily....{" "}
          </Heading>
        </Box>
      </Box>

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
