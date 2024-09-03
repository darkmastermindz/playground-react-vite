import React, { useReducer, useEffect } from "react";
import { VStack, Box, Heading, Button } from "@chakra-ui/react";
import EditableCard from "./EditableCard";

// Initial state for the reducer
const initialState = {
  todos: ["Buy groceries", "Walk the dog", "Read a book", "Go Rock Climbing!"],
  previousTodos: null, // To store the previous state for undo functionality
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return {
        ...state,
        previousTodos: state.todos, // Save current todos for undo
        todos: action.payload,
      };
    case "UNDO":
      return {
        ...state,
        todos: state.previousTodos, // Revert to previous todos
        previousTodos: null, // Clear previous todos after undo
      };
    default:
      return state;
  }
};

const EditableToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateTodo = (index, newValue) => {
    const updatedTodos = [...state.todos];
    updatedTodos[index] = newValue;
    dispatch({ type: "SET_TODOS", payload: updatedTodos });
  };

  const handleUndo = () => {
    dispatch({ type: "UNDO" });
  };

  return (
    <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Editable To-Do List
        </Heading>
        <Button
          onClick={handleUndo}
          colorScheme="red"
          isDisabled={!state.previousTodos} // Disable undo if no previous state exists
        >
          Undo
        </Button>
        <VStack spacing={4} align="stretch" width="100%">
          {state.todos.map((todo, index) => (
            <EditableCard
              key={index}
              item={todo}
              index={index}
              updateItem={(newValue) => updateTodo(index, newValue)}
            />
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default EditableToDoList;
