import React, { useState, useEffect } from "react";
import { HStack, Input, Button } from "@chakra-ui/react";

function EditableItem({ item, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [currentValue, setCurrentValue] = useState(item);

  // Calculate renderId from item.id (e.g., "A1" => "1")
  useEffect(() => {
    const renderId = item.id.match(/\d+/)[0]; // Extract number part from id
    setCurrentValue({
      ...item,
      renderId,
      renderText: `${renderId} ${item.description}`, // Initialize renderText with renderId and description
    });
  }, [item]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(currentValue); // Pass the current object back to onSave
  };

  const handleChange = (e) => {
    setCurrentValue({
      ...currentValue,
      description: e.target.value, // Update the description field
      renderText: `${currentValue.renderId} ${e.target.value}`, // Dynamically update renderText with renderId
    });
  };

  return (
    <HStack spacing={4}>
      {isEditing ? (
        <Input
          value={currentValue.description}
          onChange={handleChange}
          size="sm"
        />
      ) : (
        <span>{currentValue.renderText}</span> // Show renderText when not editing
      )}
      {isEditing ? (
        <Button aria-label="Save" size="sm" onClick={handleSaveClick}>
          {" "}
          Save{" "}
        </Button>
      ) : (
        <Button aria-label="Edit" size="sm" onClick={handleEditClick}>
          {" "}
          Edit{" "}
        </Button>
      )}
    </HStack>
  );
}

export default EditableItem;
