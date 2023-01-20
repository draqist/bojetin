import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

export const theme = extendTheme({
  fonts: {
    heading: `"Monument Extended", sans-serif`,
    body: `"DM Mono","TT Hoves", sans-serif`,
    p: `"DM Mono","TT Hoves", sans-serif`,
  },
});
