import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import "@fontsource/dm-mono";
import NextLink from "next/link";
import { useTheme } from "../data";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

const Navbar = () => {
  const { close, text, bgcolor, menu } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        display={["none", "none", "flex"]}
        h={["", "", "70px", "70px", "", "90px"]}
        w="100%"
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid "
        textTransform="uppercase"
        letterSpacing="1px"
        fontFamily={"DM Mono"}
        px="32px"
      >
        <HStack
          fontSize={["", "", "12px", "12px", "12px", "14px"]}
          fontWeight="400"
          spacing={["", "", "30px", "30px", "43px"]}
        >
          <NextLink passHref href="https://twitter.com/Hackth8r">
            <Text cursor="pointer">twitter</Text>
          </NextLink>
          <NextLink passHref href="https://github.com/draqist">
            <Text cursor="pointer">github</Text>
          </NextLink>
          <NextLink passHref href="https://www.linkedin.com/in/abdullah-abdulfatah-125189209">
            <Text cursor="pointer">linkedin</Text>
          </NextLink>
        </HStack>
        <NextLink passHref href="/">
          <Text cursor="pointer" fontSize={["", "", "14px", "14px", "12px", "14px"]}>
            dråQ™ portfolio
          </Text>
        </NextLink>
        <HStack
          fontSize={["", "", "14px", "14px", "12px", "14px"]}
          fontWeight="400"
          spacing={["", "", "30px", "30px", "43px"]}
        >
          <NextLink passHref href="/works">
            <Text cursor="pointer">works</Text>
          </NextLink>
          <NextLink passHref href="/resume">
            <Text cursor="pointer">resume</Text>
          </NextLink>
          <NextLink passHref href="/contacts">
            <Text cursor="pointer">contact</Text>
          </NextLink>
          <NextLink passHref href="/blogs">
            <Text cursor="pointer">blogs</Text>
          </NextLink>
        </HStack>
      </Flex>
      <Flex justifyContent="center" alignItems="center" display={["flex", "flex", "none"]} h="72px">
        <Button variant="unstyled" outline="0px" onClick={onOpen}>
          <VStack spacing="9px">
            <Box h="1px" w="60px" bgColor={menu} />
            <Box h="1px" w="60px" bgColor={menu} />
          </VStack>
        </Button>
        <Drawer onClose={onClose} isOpen={isOpen} size="full" placement="left">
          <DrawerOverlay />
          <DrawerContent bg={bgcolor} textTransform="uppercase">
            <Center mt="24px" mb="55px">
              <Button variant="unstyled" onClick={onClose} outline="0px">
                <Image src={close} alt="menu closing button" />
              </Button>
            </Center>
            <DrawerHeader color={text}>
              <Flex justifyContent="space-between" alignItems="center">
                <NextLink href="/" passHref>
                  <Text cursor="pointer" onClick={onClose}>
                    BOJETIN™
                  </Text>
                </NextLink>
                <ColorModeSwitcher variant="ghost" close={onClose} />
              </Flex>
            </DrawerHeader>
            <DrawerBody mt="95px" fontSize="32px" fontWeight="700">
              <VStack spacing="45px" alignItems="flex-start">
                <NextLink href="/about">
                  <Heading as={"button"} textTransform="uppercase" onClick={onClose}>
                    About
                  </Heading>
                </NextLink>
                <NextLink href="/blogs">
                  <Heading as={"button"} textTransform="uppercase" onClick={onClose}>
                    blog
                  </Heading>
                </NextLink>
                <NextLink href="/auth/register">
                  <Heading fontSize="24px" as={"button"} textTransform="uppercase" onClick={onClose}>
                    Create account
                  </Heading>
                </NextLink>
                <NextLink href="/auth/login">
                  <Heading as={"button"} textTransform="uppercase" onClick={onClose}>
                    Log In
                  </Heading>
                </NextLink>
              </VStack>
            </DrawerBody>
            <DrawerFooter
              textAlign="left"
              justifyContent="flex-start"
              textTransform="uppercase"
              py="50px"
              fontSize="15px"
              fontWeight="400"
            >
              <Text cursor="pointer">2022 © all rights reserved</Text>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;
