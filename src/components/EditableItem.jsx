import React, { useState, useEffect } from "react";
import { HStack, Input, Button, Text } from "@chakra-ui/react";

function EditableItem({ item, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(item);
  const [error, setError] = useState("");

  // Function to extract the renderId from the id
  const extractRenderId = (id) => {
    const matches = id.match(/\d+/); // Match the first sequence of digits in the id
    if (matches && matches.length) {
      return matches[0]; // Return the first match (if any)
    }
    return null; // Return null if no digits are found
  };

  useEffect(() => {
    const renderId = extractRenderId(item.id);
    
    // If the id doesn't contain a valid number, show an error
    if (!renderId) {
      setError(`Invalid ID format: "${item.id}". It must contain at least one number.`);
    } else {
      setError(""); // Clear the error if valid
      setCurrentValue({
        ...item,
        renderId,
        renderText: `${renderId} ${item.description}`, // Initialize renderText with renderId and description
      });
    }
  }, [item]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (error) {
      // Prevent saving if there's an error
      return;
    }
    setIsEditing(false);
    onSave(currentValue); // Pass the current object back to onSave
  };

  const handleChange = (e) => {
    const updatedDescription = e.target.value;
    const updatedRenderText = `${currentValue.renderId} ${updatedDescription}`;
    
    setCurrentValue({
      ...currentValue,
      description: updatedDescription, // Update the description field
      renderText: updatedRenderText,   // Dynamically update renderText with renderId
    });
  };

  return (
    <HStack spacing={4}>
      {isEditing ? (
        <Input
          value={currentValue.description}
          onChange={handleChange}
          size="sm"
          isInvalid={!!error} // Show Chakra UI invalid state if there's an error
        />
      ) : (
        <span>{currentValue.renderText}</span> // Show renderText when not editing
      )}

      {error && (
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      )}

      {isEditing ? (
        <Button aria-label="Save" size="sm" onClick={handleSaveClick} isDisabled={!!error}>
          Save
        </Button>
      ) : (
        <Button aria-label="Edit" size="sm" onClick={handleEditClick}>
          Edit
        </Button>
      )}
    </HStack>
  );
}

export default EditableItem;
