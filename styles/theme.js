import { extendTheme } from "@chakra-ui/react";
import { TextStyle as Text } from "./TextStyles";
import { ButtonStyle as Button } from "./ButtonStyles";



export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  colors: {
    primary: {
      dark: "#003100",
      light: "#e6f6e6",
    },
    secondary: "#009400",
    text: {
      dark: "#000",
      light: "#fff",
    },
    icon: '#ffd700',

  },
  components: {
    Text,
    Button,
  },
});

export default theme;
