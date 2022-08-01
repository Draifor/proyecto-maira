import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        variant: "solid",
        colorScheme: "blue",
        _hover: {
          bg: "blue.500",
          color: "white",
        },
      },
      variants: {
        "my-style": {
          bg: "#2b6cb0",
          color: "white",
          border: "1px solid #fff2",
          // boxShadow: "0 0 5px 2px #999",
          _hover: { bg: "#2c5282" },
          _focus: { boxShadow: "0 0 2px 2px #0b940b" },
        },
        "outline-style": {
          bg: "transparent",
          color: "#2b6cb0",
          border: "1px solid #2b6cb0",
          _hover: { bg: "#2c5282" },
          _focus: { boxShadow: "0 0 2px 2px #0b940b" },
        },
      },
    },
    Breadcrumb: {
      baseStyle: {
        link: {
          _hover: {
            textDecoration: "none",
          },
        },
      },
    },
  },
  breakpoints: { sm: "350px", md: "480px", lg: "700px", xl: "900px", '2xl': "1200px" },
  config: {
    initiColorMode: "dark",
    useSytemColorMode: false,
  },
});

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
