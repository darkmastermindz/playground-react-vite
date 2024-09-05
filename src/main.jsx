import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "./store"; // Import the Redux store
import App from "./App.jsx";
import "./style.css";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
