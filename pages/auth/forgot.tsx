import {
    Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
    useToast
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../data";
import { forgotValidation, forgotValues } from "../../utils/UI-LOGIC/auth/auth";
import { forgotPassword } from "../../utils/UI-LOGIC/auth/authBE";

export default function Forgot() {
  const { bgcolor, text } = useTheme();
  const [visible, setVisibility] = useState(false);

  const toast = useToast();
  const router = useRouter();
  return (
    <Box bgColor={bgcolor} color={text} minH="100vh" fontFamily={"DM Mono"}>
      <Navbar />
      <Box mt={["100px", "", "70px", "70px", "90px"]}>
        <Center textAlign={["center"]}>
          <Box>
            <Heading mb="6px"> Recover Password </Heading>
            <Box>
              <Text fontSize="xs" lineHeight="5">
                Enter your registered email to recover your
                <Text as="span" color="#006400">
                  {" "}
                  password...
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
        <Box mt={["45px"]} mx="10px" border={`1px dashed ${text}`} borderRadius="12px">
          <Box p="12px">
            <Formik
              initialValues={forgotValues}
              validationSchema={forgotValidation}
              validateOnChange
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                forgotPassword(values);
                toast({
                  title: "Password Reset",
                  description: "Password reset link has been sent to your email",
                  status: "info",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                });
                resetForm();
                router.push("/auth/login");
              }}
            >
              {({ values, handleSubmit, handleChange, errors, isSubmitting, touched }) => (
                <form onSubmit={handleSubmit}>
                  <FormControl isInvalid={errors.email ? true : false}>
                    <FormLabel htmlFor="email" fontSize="14px">
                      Email address
                    </FormLabel>
                    <Field
                      onChange={handleChange}
                      as={Input}
                      colorScheme={"gray"}
                      name="email"
                      focusBorderColor="gray.300"
                      borderColor="gray.300"
                      type="email"
                      variant={"outline"}
                      value={values.email}
                    />
                    {errors.email ? <FormErrorMessage fontSize={"11px"}> {errors.email} </FormErrorMessage> : null}
                    <FormHelperText fontSize={"10px"}> We&apos;ll never share your email.</FormHelperText>
                  </FormControl>
                  <Box h="1px" mt="20px" mb="10px" border={".5px dashed #c0c2c4"} />
                  <Button
                    type="submit"
                    w="100%"
                    bgColor={"#054e05b8"}
                    _hover={{
                      bgColor: "#062706df",
                    }}
                    _active={{
                      bgColor: "#0c810cdf",
                    }}
                    _disabled={{
                      bgColor: "#686868",
                    }}
                    color="whiteAlpha.900"
                    disabled={errors && isSubmitting ? true : false}
                  >
                    Recover password
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
        <Center w="full" mt="16px" pb="20px">
          <Text fontSize="12px">
            {" "}
            <Link as={NextLink} href="/auth/login" color={"#006400"} textDecoration="underline">
              {" "}
              Back to login
            </Link>{" "}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
