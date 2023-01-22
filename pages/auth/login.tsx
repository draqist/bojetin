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
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../data";
import { logInValidation, logInValues } from "../../utils/UI-LOGIC/auth/auth";
import { logInUser } from "../../utils/UI-LOGIC/auth/authBE";

export default function Login() {
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
            <Heading mb="6px"> Login Securely </Heading>
            <Box>
              <Text fontSize="xs" lineHeight="5">
                It's time to check your financial decisions on <br />
                <Text as="span" color="#006400">
                  {" "}
                  Bojetin...
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
        <Box mt={["45px"]} mx="10px" border={`1px dashed ${text}`} borderRadius="12px">
          <Box p="12px">
            <Formik
              initialValues={logInValues}
              validationSchema={logInValidation}
              validateOnChange
              onSubmit={(values, { resetForm }) => {
                values;
                logInUser(values);
                // toast({
                //   title: "User login",
                //   description: "User logged in successfully",
                //   status: "success",
                //   duration: 2000,
                //   isClosable: true,
                //   position: "top",
                // });
                resetForm();
                router.replace("/dash");
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
                  <FormControl isInvalid={errors.password ? true : false} mt="26px">
                    <FormLabel htmlFor="password" fontSize="14px">
                      Password
                    </FormLabel>
                    <InputGroup>
                      <Field
                        onChange={handleChange}
                        as={Input}
                        colorScheme={"gray"}
                        focusBorderColor="gray.300"
                        borderColor="gray.300"
                        type={visible ? "text" : "password"}
                        variant={"outline"}
                        name="password"
                        value={values.password}
                      />
                      {/* eslint-disable-next-line react/no-children-prop */}
                      <InputRightElement
                        onClick={() => setVisibility(!visible)}
                        children={visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                      />
                    </InputGroup>
                    {errors.password && touched.password ? (
                      <FormErrorMessage fontSize={"11px"}> {errors.password} </FormErrorMessage>
                    ) : null}
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
                    Login
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
        <Center w="full" mt="16px" pb="10px">
          <Text fontSize="12px">
            {" "}
            Don't have an account?{" "}
            <Link as={NextLink} href="/auth/register" color={"#006400"} textDecoration="underline">
              Sign up here
            </Link>{" "}
          </Text>
        </Center>
        <Center w="full" pb="20px">
          <Text fontSize="12px">
            {" "}
            <Link as={NextLink} href="/auth/forgot" color={"#b60808"} textDecoration="underline">
              {" "}
              Forgot password?{" "}
            </Link>{" "}
          </Text>
        </Center>
      </Box>
    </Box>
  );
}
