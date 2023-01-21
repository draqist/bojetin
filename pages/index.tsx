import { Center } from "@chakra-ui/react";
import BottomNav from "../components/BottomNav";

export default function Home() {
  return (
    <Center h="100vh" bgColor="#0B0F12" color="white">
      WELCOME TO THE HOMEPAGE OF BOJETIN
      <BottomNav />
    </Center>
  );
}
