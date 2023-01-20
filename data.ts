import { useColorModeValue } from "@chakra-ui/react";

export const themes = {
  // 00008B
  // 000080
  // 00006B
  // ======= text
  // #D3D3D3
  //#F5F5DC

  dark: {
    bg: "#2F4F4F",
    text: "#F5F5DC",
    nav: "#0B0F12B2",
  },
  light: {
    bg: "#E6E6E6",
    text: "#333333",
    nav: "#E6E6E6B2",
  },
};

export const useTheme = () => {
  const nav = useColorModeValue(themes?.light.nav, themes?.dark.nav);
  const bgcolor = useColorModeValue(themes?.light.bg, themes?.dark.bg);
  const text = useColorModeValue(themes?.light.text, themes?.dark.text);
  const close = useColorModeValue("/Close2.svg", "/Menuclose.svg");
  const highlight = useColorModeValue("whatsapp.600", "whatsapp.400");
  const menu = useColorModeValue("#0B0F12", "#E6E6E6");
  const signature = useColorModeValue("https://i.ibb.co/jvqmLVQ/Drac.png", "https://i.ibb.co/Fgn4ts9/Drac1.png");
  return {
    nav,
    bgcolor,
    text,
    close,
    menu,
    signature,
    highlight,
  };
};
