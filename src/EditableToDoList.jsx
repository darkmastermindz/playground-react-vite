import React, { useEffect, useState } from "react";
import {
  VStack,
  HStack,
  Input,
  Select,
  Button,
  Box,
  Text,
  Heading,
  Divider,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { updateDataSlice, selectData } from "./dataSlice";
import EditableList from "./components/EditableList";

const EditableToDoList = () => {
  const dispatch = useDispatch(); // Get the dispatch function to trigger actions in the Redux store
  const data = useSelector(selectData); // Get the data from the Redux store
  const [newItem, setNewItem] = useState({
    id: "",
    description: "",
    type: "Type A",
  });
  const [error, setError] = useState("");

  // Hardcoded data initially
  const hardcodedData = [
    { id: "A1", description: "This is todo item 1", type: "Type A" },
    { id: "B2", description: "This is todo item 2", type: "Type B" },
    { id: "C3", description: "This is todo item 3", type: "Type C" },
    { id: "A4", description: "This is todo item 4", type: "Type A" },
    { id: "B5", description: "This is todo item 5", type: "Type B" },
  ];

  // Update the Redux slice initially with hardcoded data
  useEffect(() => {
    if (!data.length) {
      // Only initialize the data if it's not already set
      dispatch(updateDataSlice(hardcodedData)); // Dispatch the action to update the data in the Redux store
    }
  }, [dispatch, data.length]); // Include dispatch in the dependency array to avoid potential issues

  /*
    Explanation of why 'dispatch' was added to the dependency array:

    - The 'useEffect' hook is designed to run side effects (like dispatching actions) after the component renders.
    - In React, every variable or function referenced inside 'useEffect' should be included in its dependency array.
    - Even though 'dispatch' comes from Redux's 'useDispatch', it is still a reference to a function, 
      and omitting it from the dependency array might cause issues with stale closures if the component 
      is re-rendered in certain situations.
    - Including 'dispatch' ensures that the 'useEffect' is aware of the most current 'dispatch' function 
      and avoids potential bugs when the function is updated or changed.
  */

  // Validate inputs and add a new item to the data
  const handleAddItem = () => {
    if (!newItem.id || !newItem.description) {
      setError("Both ID and Description are required.");
      return;
    }
    // Check for duplicate IDs
    if (data.find((item) => item.id === newItem.id)) {
      setError("ID must be unique.");
      return;
    }

    const newData = [...data, newItem];
    dispatch(updateDataSlice(newData)); // Update Redux slice with the new data
    setNewItem({ id: "", description: "", type: "Type A" }); // Reset the form fields
    setError(""); // Clear any previous errors
  };

  return (
    <>
      <VStack mb={8} spacing={4} align="stretch">
        {/* Experiment Description */}
        <VStack mb={5} spacing={4} align="stretch" textAlign="center">
          <Heading size="lg">
            Experiment: Managing Dynamic Data with Redux
          </Heading>
          <Text fontSize="md">
            This experiment demonstrates how to dynamically manage a list of
            items using React, Redux, and Chakra UI. You can add new items to
            the list, modify the existing ones, and observe the dynamic changes
            reflected in the UI.
          </Text>
          <Divider />
        </VStack>

        {/* Add New Item Form */}
        <VStack mb={5} spacing={4} align="stretch">
          <Heading size="md">Add New Item</Heading>
          <Text fontSize="sm" color="gray.600">
            Use the form below to add a new item to the list. Each item must
            have a unique ID and description. You can also specify the type of
            the item.
          </Text>

          {/* Error message */}
          {error && (
            <Text color="red.500" fontSize="sm" mb={2}>
              {error}
            </Text>
          )}

          <HStack flexWrap="wrap" justifyContent="space-between" spacing={4}>
            <Input
              placeholder="ID"
              value={newItem.id}
              onChange={(e) => setNewItem({ ...newItem, id: e.target.value })}
              isInvalid={!newItem.id && error}
              errorBorderColor="red.500"
              flex="1"
              minW="150px"
            />
            <Input
              placeholder="Description"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              isInvalid={!newItem.description && error}
              errorBorderColor="red.500"
              flex="2"
              minW="150px"
            />
            <Select
              value={newItem.type}
              onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
              flex="1"
              minW="120px"
            >
              <option value="Type A">Type A</option>
              <option value="Type B">Type B</option>
              <option value="Type C">Type C</option>
            </Select>
          </HStack>

          <Button
            colorScheme="blue"
            onClick={handleAddItem}
            width="100%"
            mt={4}
          >
            Add Item
          </Button>
        </VStack>

        {/* Editable List */}
        <EditableList data={data} />
      </VStack>
    </>
  );
};

export default EditableToDoList;
