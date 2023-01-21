import { Box, useTheme, useToast } from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
import { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import { auth } from "../utils/firebase";

export default function Home() {
  const { bgcolor, text } = useTheme();
  const toast = useToast();
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (!user?.emailVerified) {
        try {
          // @ts-ignore
          sendEmailVerification(user).then(() => {
            toast({
              title: "Verification required",
              description: "Kindly check your email to confirm your account",
              status: "warning",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
          })
        } catch (error) {
          toast({
              title: "Could not verify your email",
              description: "Kindly check your email to confirm your account",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            });
        }
      }
    })
  }, [])
  return (
    <AppLayout>
      <Box h="100" bgColor={bgcolor} color={text}>
        WELCOME TO THE HOMEPAGE OF BOJETIN
      </Box>
      {/* <BottomNav /> */}
    </AppLayout>
  );
}
