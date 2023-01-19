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
  Text,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Navbar from "../../components/Navbar";
import { useTheme } from "../../data";
import { initialValues, registerValidation } from "../../utils/UI-LOGIC/auth/auth";

export default function Register() {
  const { bgcolor, text } = useTheme();
  const [visible, setVisibility] = useState(false);
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
                  Bojetin...
                </Text>
              </Text>
            </Box>
          </Box>
        </Center>
        <Box mt={["30px"]} mx="10px" border={"1px dashed black"} borderRadius="12px">
          <Box p="12px">
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidation}
              validateOnBlur
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ values, handleSubmit, handleChange, errors, touched }) => (
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
                    {errors.email && touched.email ? (
                      <FormErrorMessage> Kindly enter a valid email address </FormErrorMessage>
                    ) : null}
                    <FormHelperText fontSize={"10px"}> We&apos;ll never share your email.</FormHelperText>
                  </FormControl>
                  <FormControl isInvalid={errors.firstName ? true : false} mt="26px">
                    <FormLabel htmlFor="text" fontSize="14px">
                      First Name
                    </FormLabel>
                    <Field
                      onChange={handleChange}
                      as={Input}
                      colorScheme={"gray"}
                      focusBorderColor="gray.300"
                      borderColor="gray.300"
                      type="text"
                      name="firstName"
                      variant={"outline"}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName ? (
                      <FormErrorMessage> Kindly enter your first name </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.lastName ? true : false} mt="26px">
                    <FormLabel htmlFor="text" fontSize="14px">
                      Last Name
                    </FormLabel>
                    <Field
                      onChange={handleChange}
                      as={Input}
                      colorScheme={"gray"}
                      focusBorderColor="gray.300"
                      borderColor="gray.300"
                      type="text"
                      name="lastName"
                      variant={"outline"}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName ? (
                      <FormErrorMessage> Kindly enter your last name </FormErrorMessage>
                    ) : null}
                  </FormControl>
                  <FormControl isInvalid={errors.phoneNumber ? true : false} mt="26px">
                    <FormLabel htmlFor="tel" fontSize="14px">
                      Phone Number
                    </FormLabel>
                    <Field
                      onChange={handleChange}
                      as={Input}
                      colorScheme={"gray"}
                      focusBorderColor="gray.300"
                      borderColor="gray.300"
                      type="tel"
                      variant={"outline"}
                      name="phoneNumber"
                      value={values.phoneNumber}
                    />
                    {errors.phoneNumber && touched.phoneNumber ? (
                      <FormErrorMessage> Kindly enter a valid phone number </FormErrorMessage>
                    ) : null}
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
                      <FormErrorMessage> Kindly enter a strong password </FormErrorMessage>
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
                    color="whiteAlpha.900"
                  >
                    Create account
                  </Button>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
