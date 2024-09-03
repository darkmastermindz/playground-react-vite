import React, { useState } from "react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Box,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

const EditableCard = ({ item, index, updateItem }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (newValue) => {
    updateItem(index, newValue);
    setIsEditing(false); // Switch back to view mode after saving
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      boxShadow="md"
      width="100%"
    >
      <VStack align="start" width="100%">
        <Editable
          defaultValue={item}
          fontSize="xl"
          isPreviewFocusable={false}
          width="100%"
          isEditing={isEditing}
          onSubmit={handleSave}
        >
          <EditablePreview width="100%" />
          <EditableInput width="100%" />
        </Editable>
        <HStack width="100%" justify="flex-end">
          <IconButton
            aria-label={isEditing ? "Save" : "Edit"}
            icon={isEditing ? <SaveIcon /> : <EditIcon />}
            onClick={toggleEditMode}
            colorScheme="teal"
          />
        </HStack>
      </VStack>
    </Box>
  );
};

export default EditableCard;
