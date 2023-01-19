import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props: any) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  let variant;
  let close = props.close;
  if (props.variant === "undefined") {
    variant = "solid";
  } else {
    variant = props.variant;
  }
  return (
    <Button
      size="sm"
      aria-label={`Switch to ${text} mode`}
      variant={variant}
      w={["50px", "", "40px"]}
      h={["50px", "", "40px"]}
      onClick={() => (toggleColorMode(), props.close && close())}
      {...props}
      fontWeight="400"
      __active={{ outline: "none" }}
      fontSize={["48px", "", ""]}
      _hover={{ bg: "transparent" }}
    >
      <SwitchIcon color="inherit" />
    </Button>
  );
};
