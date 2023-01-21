import { Box, useTheme, useToast } from "@chakra-ui/react";
import { sendEmailVerification } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import AppLayout from "../components/AppLayout";
import { auth, db } from "../utils/firebase";

export default function Home() {
  const { bgcolor, text } = useTheme();
  const [displayName, setName] = useState("");
  const toast = useToast();
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
              duration: 3000,
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
      const getUserDoc = async (user) => {
        try {
          const docRef = collection(db, "users");
          const docSnap = await getDocs(docRef);
          docSnap.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
          });
        } catch (error) {
          console.log(error);
        }
      };
      const data = getUserDoc(user);
      console.log(data);
      // @ts-ignore
      setName(user?.displayName);
    });
  }, []);
  return (
    <AppLayout>
      <Box h="100" bgColor={bgcolor} color={text}>
        Hey, {displayName}
      </Box>
      {/* <BottomNav /> */}
    </AppLayout>
  );
}
