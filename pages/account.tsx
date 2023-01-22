import { Button, Center, useToast } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import AppLayout from "../components/AppLayout";
import { auth } from "../utils/firebase";

export default function Account() {
  const toast = useToast();
  let router = useRouter();
  return (
    <AppLayout>
      <Center h="100vh">
        <Button
          w="full"
          colorScheme="red"
          onClick={() => {
            signOut(auth).then(() => {
              toast({
                title: "Logged out successfully",
                description: "User logged out successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
                position: "top",
              });
              router.push("/auth/login");
            });
          }}
        >
          Logout
        </Button>
      </Center>
    </AppLayout>
  );
}
