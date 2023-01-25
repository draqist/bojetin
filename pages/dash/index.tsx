import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
import { Field } from "formik";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import ActivityCard from "../../components/ActivityCard";
import AppLayout from "../../components/AppLayout";
import { useTheme } from "../../data";
import { auth } from "../../utils/firebase";
import { useTime } from "../../utils/hooks/timeHook";

export default function Home() {
  const { bgcolor, text } = useTheme();
  const [displayName, setName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const currentTimeofDay = useTime();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user?.emailVerified) {
        try {
          // @ts-ignore
          sendEmailVerification(user).then(() => {
            toast({
              title: "Verification required",
              description: "Kindly check your email to confirm your account",
              status: "warning",
              duration: 7000,
              isClosable: true,
              position: "top",
            });
          });
        } catch (error) {
          toast({
            // @ts-ignore
            title: error.code,
            description: "Kindly check your email to confirm your account",
            status: "error",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
      }
      // @ts-ignore
      // const getUserDoc = async (user) => {
      //   try {
      //     const docRef = collection(db, "users");
      //     const docSnap = await getDocs(docRef);
      //     docSnap.forEach((doc) => {
      //       // doc.data() is never undefined for query doc snapshots
      //       console.log(doc.id, " => ", doc.data());
      //     });
      //   } catch (error) {
      //     console.log(error);
      //   }
      // };
      // const data = getUserDoc(user);
      // console.log(data);
      // @ts-ignore
      setName(user?.displayName);
    });
  }, [auth]);
  return (
    <AppLayout>
      <Flex alignItems={"flex-end"} justifyContent="space-between" h="60px" color={text}>
        <Box>
          <Heading fontSize="24px" color={"gray.600"}>
            {" "}
            Abdullah,{" "}
          </Heading>
          <Text textTransform={"capitalize"} fontSize="12px">
            Good {`${currentTimeofDay}`}{" "}
          </Text>
        </Box>
        <Link as={NextLink} href="/account" _hover={{ textDecoration: "none" }}>
          <Avatar name="Abdullah Abdulfatah " src={"https://bit.ly/kent-c-dodds"} size="md" />
        </Link>
      </Flex>
      <Link as={NextLink} href="/savings/#chart" _hover={{ textDecoration: "none" }}>
        <Box h="120px" bgColor="#088fadb8" mt="2.5rem" borderRadius="12px" p="24px" px="20px" boxShadow={"2xl"}>
          <Heading fontWeight={"400"} color="whiteAlpha.600" fontSize="22px">
            {" "}
            Total savings
          </Heading>
          <Heading mt="8px" color="white" letterSpacing={"wider"}>
            ₦100,000.00
          </Heading>
        </Box>
      </Link>
      <Flex justifyContent={"space-between"} mt="18px" alignItems="center">
        <Text color="green.400" fontSize="12px">
          {" "}
          Get your bread up !!!
        </Text>
        <Button size="xs" colorScheme={"blue"} onClick={onOpen}>
          Quick save
        </Button>
      </Flex>
      <Box mt="2.5rem">
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          Recent Activities
        </Text>
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
      </Box>
      <Box>
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          Recent Activities
        </Text>
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
      </Box>
      <Box>
        <Text textTransform={"uppercase"} mb="1rem" fontSize="12px" color="">
          Recent Activities
        </Text>
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/savings.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
        <ActivityCard type="/minus.png" desc="Completed challenge. [Setup & Vibes ]" time="3 mths ago" />
      </Box>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize={"18px"} textTransform="uppercase" color="gray.600">
            Quick Save
          </DrawerHeader>

          <DrawerBody>
            <FormControl>
              <FormLabel htmlFor="email" fontSize="14px">
                Email address
              </FormLabel>
              <Input
                // onChange={handleChange}
                colorScheme={"gray"}
                name="email"
                focusBorderColor="gray.300"
                borderColor="gray.300"
                type="email"
                variant={"outline"}
                // value={values.email}
              />
              {/* {errors.email ? <FormErrorMessage fontSize={"11px"}> {errors.email} </FormErrorMessage> : null} */}
              <FormHelperText fontSize={"10px"}> We&apos;ll never share your email.</FormHelperText>
            </FormControl>
            <FormControl mt="26px">
              <FormLabel htmlFor="text" fontSize="14px">
                First Name
              </FormLabel>
              <Input
                // onChange={handleChange}
                colorScheme={"gray"}
                focusBorderColor="gray.300"
                borderColor="gray.300"
                type="text"
                name="firstName"
                variant={"outline"}
                // value={values.firstName}
              />
              {/* {errors.firstName && touched.firstName ? (
                <FormErrorMessage fontSize={"11px"}> {errors.firstName} </FormErrorMessage>
              ) : null} */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="text" fontSize="14px">
                Last Name
              </FormLabel>
              <Input
                // onChange={handleChange}
                colorScheme={"gray"}
                focusBorderColor="gray.300"
                borderColor="gray.300"
                type="text"
                name="lastName"
                variant={"outline"}
                // value={values.lastName}
              />
              {/* {errors.lastName && touched.lastName ? (
                <FormErrorMessage fontSize={"11px"}> {errors.lastName} </FormErrorMessage>
              ) : null} */}
            </FormControl>
            <FormControl mt="26px">
              <FormLabel htmlFor="tel" fontSize="14px">
                Phone Number
              </FormLabel>
              <Input
                // onChange={handleChange}
                colorScheme={"gray"}
                focusBorderColor="gray.300"
                borderColor="gray.300"
                type="tel"
                // pattern="[+]{1}[0-9]{11,14}"
                variant={"outline"}
                name="phoneNumber"
                // value={values.phoneNumber}
              />
              {/* {errors.phoneNumber && touched.phoneNumber ? (
                <FormErrorMessage fontSize={"11px"}> {errors.phoneNumber} </FormErrorMessage>
              ) : null} */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" fontSize="14px">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  // onChange={handleChange}
                  colorScheme={"gray"}
                  focusBorderColor="gray.300"
                  borderColor="gray.300"
                  // type={visible ? "text" : "password"}
                  variant={"outline"}
                  name="password"
                  // value={values.password}
                />
                {/* eslint-disable-next-line react/no-children-prop */}
                <InputRightElement
                // onClick={() => setVisibility(!visible)}
                // children={visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                />
              </InputGroup>
              {/* {errors.password && touched.password ? (
                <FormErrorMessage fontSize={"11px"}> {errors.password} </FormErrorMessage>
              ) : null} */}
            </FormControl>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </AppLayout>
  );
}
