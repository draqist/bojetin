import { Box, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../data";

export default function Register() {
  const { nav, bgcolor, text } = useTheme();
  return (
    <Box bgColor={bgcolor} color={text} minH="100vh">
      <Navbar />
      <Box mt={["50px", "", "70px", "70px", "90px"]}>
        <Center textAlign={["center"]}>
          <Box>
            <Heading mb="4px"> Create an account </Heading>
            <Box>
              <Text fontSize="xs" lineHeight="1.25">
                Keep track of your income and expenses <br /> make smart decisions with
                <Text as="span" color="#006400">
                  {" "}
                  Bojetin
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
        <Box mt={["20px"]} mx="10px" border={"1px dashed black"} borderRadius="12px">
          <Box p="12px">
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input type="email" variant={"outline"} />
              <FormHelperText> We&apos;ll never share your email.</FormHelperText>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
