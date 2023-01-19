import { Box, Center, FormControl, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../data";

export default function Register() {
  const { bgcolor, text } = useTheme();
  const [visible, setVisibility] = useState(false)
  return (
    <Box bgColor={bgcolor} color={text} minH="100vh" fontFamily={"DM Mono"}>
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
              <FormLabel fontSize="14px">Email address</FormLabel>
              <Input colorScheme={"gray"} focusBorderColor="gray.300" borderColor={"#CBD5E0"} type="email" variant={"outline"} />
              <FormHelperText fontSize={"10px"}> We&apos;ll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt="26px">
              <FormLabel fontSize="14px">First Name</FormLabel>
              <Input colorScheme={"gray"} focusBorderColor="gray.300" borderColor={"#CBD5E0"} type="text" variant={"outline"} />
            </FormControl>
            <FormControl mt="26px">
              <FormLabel fontSize="14px">Last Name</FormLabel>
              <Input colorScheme={"gray"} focusBorderColor="gray.300" borderColor={"#CBD5E0"} type="text" variant={"outline"} />
            </FormControl>
            <FormControl mt="26px">
              <FormLabel fontSize="14px">Phone Number</FormLabel>
              <Input colorScheme={"gray"} focusBorderColor="gray.300" borderColor={"#CBD5E0"} type="tel" variant={"outline"} />
            </FormControl>
            <FormControl mt="26px">
              <FormLabel fontSize="14px">Password</FormLabel>
              <InputGroup>
                <Input colorScheme={"gray"} focusBorderColor="gray.300" borderColor={"#CBD5E0"} type={visible?"text":"password"} variant={"outline"} />
                {/* eslint-disable-next-line react/no-children-prop */}
                <InputRightElement onClick={() => setVisibility(!visible)} children={visible ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>} />
              </InputGroup>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
