import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  VStack,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as="nav"
      bg="gray.800"
      p={4}
      w={isOpen ? { base: "full", md: "250px" } : { base: "75px", md: "75px" }}
      h="100vh"
      position="fixed"
      left={0}
      top={0}
      transition="width 0.2s"
      zIndex="1000"
    >
      <VStack spacing={4} align={isOpen ? "stretch" : "center"}>
        <IconButton
          icon={isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          onClick={onToggle}
          colorScheme="teal"
          aria-label="Toggle Sidebar"
          alignSelf={isOpen ? "flex-end" : "center"}
        />
        <Link to="/">
          <Button
            colorScheme="teal"
            variant="solid"
            w={isOpen ? "full" : "auto"}
            justifyContent="flex-start"
          >
            {isOpen ? "Home" : <Text fontSize="xs">H</Text>}
          </Button>
        </Link>
        <Link to="/accordion-to-do-list">
          <Button
            colorScheme="teal"
            variant="solid"
            w={isOpen ? "full" : "auto"}
            justifyContent="flex-start"
          >
            {isOpen ? "Accordion To-Do List" : <Text fontSize="xs">A</Text>}
          </Button>
        </Link>
        <Link to="/editable-to-do-list">
          <Button
            colorScheme="teal"
            variant="solid"
            w={isOpen ? "full" : "auto"}
            justifyContent="flex-start"
          >
            {isOpen ? "Editable To-Do List" : <Text fontSize="xs">E</Text>}
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
