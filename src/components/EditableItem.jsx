import React, { useState, useEffect } from "react";
import { HStack, Input, Button, Text } from "@chakra-ui/react";

function EditableItem({ item, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(item);
  const [error, setError] = useState("");

  // Function to check if the ID contains a number
  const isValidId = (id) => {
    return /\d/.test(id); // Check if there's at least one digit in the id
  };

  useEffect(() => {
    if (!isValidId(item.id)) {
      setError(`Invalid ID: "${item.id}". It must contain at least one number.`);
    } else {
      setError(""); // Clear the error if valid
      const renderId = item.id.match(/\d+/)[0]; // Extract the number part from the id
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

  const handleIdChange = (e) => {
    const newId = e.target.value;
    
    if (!isValidId(newId)) {
      setError("ID must contain at least one number.");
    } else {
      setError(""); // Clear the error if valid
    }

    setCurrentValue({
      ...currentValue,
      id: newId, // Update the id field
    });
  };

  const handleDescriptionChange = (e) => {
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
        <>
          <Input
            value={currentValue.id}
            onChange={handleIdChange}
            size="sm"
            isInvalid={!!error} // Mark input as invalid if there's an error
            placeholder="ID"
          />
          <Input
            value={currentValue.description}
            onChange={handleDescriptionChange}
            size="sm"
            isInvalid={!!error} // Optionally handle invalid description here
            placeholder="Description"
          />
        </>
      ) : (
        <span>{currentValue.renderText}</span> // Show renderText when not editing
      )}

      {error && (
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      )}

      {isEditing ? (
        <Button
          aria-label="Save"
          size="sm"
          onClick={handleSaveClick}
          isDisabled={!!error} // Disable Save button if there's an error
        >
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
