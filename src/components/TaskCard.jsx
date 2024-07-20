import React from "react";
import { Box } from "@chakra-ui/react";

const TaskCard = ({ task }) => {
  return (
    <Box className="card p-4 mb-2 bg-gray-100 rounded-lg shadow-md">
      {task.task}: {task.status}
    </Box>
  );
};

export default TaskCard;
