import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

export default function BottomNav() {
  return (
    <Box pos="absolute" bottom="0" minW="100vw" w="100vw">
      <Grid templateColumns='repeat(4, 1fr)' alignItems={"center"} gap={6} w="100%" h ="65px">
        <GridItem textAlign={"center"} w="100%" justifySelf="center">
            <Text fontSize="10px" as={"span"}>Home</Text>
            {/* <BiHomeAlt/> */}
        </GridItem>
        <GridItem justifySelf="center" textAlign={"center"} w="100%">
          <Text fontSize="10px" as={"span"}>Savings</Text>
        </GridItem>
        <GridItem justifySelf="center" textAlign={"center"} w="100%">
          <Text fontSize="10px" as={"span"}>Expenses</Text>
        </GridItem>
        <GridItem justifySelf="center" textAlign={"center"} w="100%">
          <Text fontSize="10px" as={"span"}>Account</Text>
        </GridItem>
      </Grid>
    </Box>
  )
}
