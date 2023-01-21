import { Center, useTheme } from "@chakra-ui/react";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const { bgcolor, text } = useTheme();
  return (
    <Center h="100vh" bgColor={bgcolor} color={text}>
      WELCOME TO THE HOMEPAGE OF BOJETIN
      <BottomNav />
    </Center>
  );
}
