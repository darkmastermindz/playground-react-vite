import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import TaskCard from "./TaskCard";

const TaskAccordion = ({ tasks, status }) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {tasks.map(({ team, project, task }) => (
        <AccordionItem key={`${team}-${project}-${task.task}`}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {team} - {project} - {status}
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <TaskCard task={task} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TaskAccordion;
