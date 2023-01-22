import { Flex, Image, Text } from "@chakra-ui/react";

// @ts-ignore
const ActivityCard = ({ type, desc, time }) => {
  return (
    <Flex
      borderWidth="1px"
      h="70px"
      w="full"
      borderTopRadius={"8px"}
      borderBottomRightRadius="8px"
      border="1 solid #e2e8f0"
      p="1rem"
      mb="1rem"
      alignItems={"center"}
    >
      <Image src={type} alt="savings\\expense" borderRadius={"50%"} w="2rem" h="2rem" mr={"1rem"} />
      <Flex direction={"column"}>
        <Text fontSize=".75rem" color={"#4a5568"} whiteSpace="pre-wrap" textAlign={"left"}>
          {desc}
        </Text>
        <Text fontSize=".75rem" color={"#4a5568"} whiteSpace="pre-wrap" textAlign={"left"}>
          {time}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ActivityCard;
