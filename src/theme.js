// src/theme.js
import { extendTheme } from "@chakra-ui/react";

// Custom Chakra UI theme
const theme = extendTheme({
  colors: {
    brand: {
      50: "#e4f0f9",
      100: "#b5d4f3",
      200: "#84b8ed",
      300: "#559ce6",
      400: "#1c83e0",
      500: "#006aca", // Primary brand color
      600: "#0054a0",
      700: "#003e77",
      800: "#00294d",
      900: "#001324",
    },
  },
  fonts: {
    heading: `'Open Sans', sans-serif`, // Custom font for headings
    body: `'Roboto', sans-serif`, // Custom font for body text
  },
  styles: {
    global: {
      body: {
        bg: "gray.50", // Global body background color
        color: "gray.800", // Global text color
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold", // Custom style for Button component
      },
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: {
          bg: "brand.500", // Button background using brand color
          color: "white",
          _hover: {
            bg: "brand.600", // Button hover background color
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.50",
          },
        },
      },
    },
  },
});

export default theme;
