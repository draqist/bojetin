import { Avatar, Box, Flex, Heading, Link, Text, useToast } from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
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
  }, []);
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
      <Box h="120px" bgColor="#088fadb8" my="2.5rem" borderRadius="12px" p="24px" px="20px" boxShadow={"2xl"}>
        <Heading fontWeight={"400"} color="whiteAlpha.600" fontSize="22px">
          {" "}
          Total savings
        </Heading>
        <Heading mt="8px" color="white" letterSpacing={"wider"}>
          ₦100,000.00
        </Heading>
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
      {/* <BottomNav /> */}
    </AppLayout>
  );
}
