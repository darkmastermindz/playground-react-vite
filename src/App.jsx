import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Image,
  Heading,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AccordionToDoList from "./pages/AccordionToDoList";
import EditableToDoList from "./pages/EditableToDoList"; // Import the EditableToDoList component
import Sidebar from "./components/Sidebar";

function App() {
  const { isOpen } = useDisclosure();

  return (
    <Router>
      <Flex>
        <Sidebar />
        <Box
          ml={{
            base: isOpen ? "full" : "75px",
            md: isOpen ? "250px" : "75px",
          }}
          p={{ base: 4, md: 8 }}
          flex="1"
          transition="margin-left 0.2s"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/accordion-to-do-list"
              element={<AccordionToDoList />}
            />
            <Route path="/editable-to-do-list" element={<EditableToDoList />} />{" "}
            {/* Add the new route */}
          </Routes>
        </Box>
      </Flex>
    </Router>
  );
}

const Home = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Box textAlign="center">
      <VStack spacing={8}>
        <HStack spacing={4}>
          <a
            href="https://vitejs.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <Image src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </HStack>
        <Heading as="h1" size="2xl">
          Vite + React
        </Heading>
        <Box className="card" mt={4}>
          <Button onClick={() => setCount(count + 1)}>count is {count}</Button>
          <Text mt={4}>
            Edit <code>src/App.jsx</code> and save to test HMR
          </Text>
        </Box>
        <Text className="read-the-docs">
          Click on the Vite and React logos to learn more
        </Text>
      </VStack>
    </Box>
  );
};

export default App;
