import { Box, Button, Center, Heading, Image, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { myQuote, quote, quoteBlock } from "../data";

export default function Splash() {
  const router = useRouter();
  return (
    <Box w="100%" h="100vh" bgColor="#0B0F12" pt="20px" px="14px">
      <Box py="20px" w="full" borderRadius="14px" bgColor="green.400" overflow={"hidden"}>
        <Center w="full">
          <Image
            as={motion.img}
            initial={{ opacity: 0, originX: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 2, ease: "easeInOut" } }}
            src="/expense.png"
            h="380px"
            objectFit={"contain"}
          />
        </Center>
        <Box px="20px" mt="24px">
          <Heading color={"#ffffffda"} fontSize="20px">
            {" "}
            $ave up for your goal$ easily....{" "}
          </Heading>
        </Box>
      </Box>

      <Box
        as={motion.div}
        variants={quoteBlock}
        initial="hidden"
        whileInView="visible"
        mt="48px"
        mb="30px"
        fontFamily={"DM Mono"}
      >
        <Text color="whiteAlpha.400"> Easy management </Text>
        {myQuote.split("").map((qte, i) => {
          return (
            <Heading as={motion.span} variants={quote} key={qte + "_" + i} color="#939394">
              {qte}
            </Heading>
          );
        })}
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
