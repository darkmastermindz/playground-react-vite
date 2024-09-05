import React, { useState, useEffect } from "react";
import { VStack, Select, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import EditableItem from "./EditableItem";
import { updateDataSlice } from "../dataSlice";

function EditableList({ data }) {
  const [localData, setLocalData] = useState([]);
  const [filterType, setFilterType] = useState("Type A"); // Default filter type
  const dispatch = useDispatch();

  // Initialize localData as a subset with calculated renderText and renderId, and filter by type
  const initializeLocalData = (data) => {
    if (!data || !data.length) return []; // Ensure data is not null, undefined, or empty
    return data
      .filter((item) => item.type === filterType) // Filter by selected type
      .map((item) => ({
        ...item,
        renderText: `${item.id.match(/\d+/)[0]} ${item.description}`, // Add renderText field
        renderId: item.id.match(/\d+/)[0], // Extract the number part from the id
      }));
  };

  useEffect(() => {
    if (data && data.length) {
      setLocalData(initializeLocalData(data)); // Ensure data is valid and non-empty before setting localData
    }
  }, [data, filterType]);

  const handleSave = (newValue) => {
    const clonedData = [...localData];

    // Find the index of the object that matches the id in newValue
    const index = clonedData.findIndex((obj) => obj.id === newValue.id);

    // If found, replace the object by merging the newValue into the existing object
    if (index !== -1) {
      clonedData[index] = { ...clonedData[index], ...newValue };

      // Update localData and recalculate renderText and renderId
      const updatedLocalData = clonedData.map((item) => ({
        ...item,
        renderText: `${item.renderId} ${item.description}`, // Recalculate renderText
        renderId: item.id.match(/\d+/)[0], // Ensure renderId is recalculated
      }));

      setLocalData(updatedLocalData);

      // Now, merge changes into the original data and remove renderText before saving
      const mergedData = data.map((item) => {
        const subsetItem = updatedLocalData.find(
          (subItem) => subItem.id === item.id,
        );
        if (subsetItem) {
          // Destructure to remove renderText and renderId
          const { renderText, renderId, ...rest } = subsetItem;
          return { ...item, ...rest }; // Spread the remaining properties into item
        }
        return item; // Return original item if no match
      });

      // Dispatch the merged data back to the Redux store
      dispatch(updateDataSlice(mergedData));
    }
  };

  return (
    <>
      {/* Dropdown for selecting filter type */}
      <Select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        mb={4}
      >
        <option value="Type A">Type A</option>
        <option value="Type B">Type B</option>
        <option value="Type C">Type C</option>
      </Select>
      {/* List of editable items */}
      <VStack spacing={4}>
        {localData.map((item) => (
          <EditableItem key={item.id} item={item} onSave={handleSave} />
        ))}
      </VStack>
      {/* Print localData and data (slice) */}
      <Text mt={8} fontWeight="bold">
        Current Local Data ({filterType}):
      </Text>
      <Text>{JSON.stringify(localData, null, 2)}</Text>
      <Text mt={8} fontWeight="bold">
        Current Slice Data (dataSlice.js):
      </Text>
      <Text>{JSON.stringify(data || {}, null, 2)}</Text>{" "}
      {/* Safe fallback for null/undefined data */}
    </>
  );
}

export default EditableList;
