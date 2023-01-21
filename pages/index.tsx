import { Box, useTheme } from "@chakra-ui/react";
import AppLayout from "../components/AppLayout";

export default function Home() {
  const { bgcolor, text } = useTheme();
  return (
    <AppLayout>
      <Box h="100" bgColor={bgcolor} color={text}>
        WELCOME TO THE HOMEPAGE OF BOJETIN
      </Box>
      {/* <BottomNav /> */}
    </AppLayout>
  );
}
