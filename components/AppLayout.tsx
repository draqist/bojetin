import { Box } from "@chakra-ui/react";
import BottomNav from "./BottomNav";

// @ts-ignore
export default function AppLayout({ children }) {
  return (
    <>
      <Box overflow="scroll" zIndex="1" bg="white" h="calc(100vh - 60px)" pt="24px" px="16px">
        {children}
      </Box>
      <BottomNav />
    </>
  );
}
