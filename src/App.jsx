import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider, Box, Flex, useDisclosure } from "@chakra-ui/react";
import AccordionToDoList from "./AccordionToDoList";
import EditableToDoList from "./EditableToDoList"; // Import the EditableToDoList component
import Sidebar from "./components/Sidebar";

function App() {
  const { isOpen } = useDisclosure();

  return (
    <ChakraProvider>
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
              <Route
                path="/editable-to-do-list"
                element={<EditableToDoList />}
              />{" "}
              {/* Add the new route */}
            </Routes>
          </Box>
        </Flex>
      </Router>
    </ChakraProvider>
  );
}

const Home = () => {
  return (
    <Box textAlign="center">
      <Heading as="h1" size="2xl">
        Welcome to the To-Do App
      </Heading>
    </Box>
  );
};

export default App;
