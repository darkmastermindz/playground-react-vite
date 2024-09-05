import React, { useEffect, useReducer, useState } from "react";
import { VStack, Button, Box, Heading } from "@chakra-ui/react";
import FilterForm from "../components/FilterForm";
import TaskAccordion from "../components/TaskAccordion";
import { hardcodedData, fetchData as fetchNewData } from "../data/DataFetcher";

// Initial state with three categories
const initialState = {
  completedTasks: [],
  notStartedTasks: [],
  inProgressTasks: [],
  data: null,
  previousData: null, // Add a new field to store previous data
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPLETED_TASKS":
      return { ...state, completedTasks: action.payload };
    case "SET_NOT_STARTED_TASKS":
      return { ...state, notStartedTasks: action.payload };
    case "SET_IN_PROGRESS_TASKS":
      return { ...state, inProgressTasks: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload, previousData: state.data }; // Store current data as previous data
    case "UNDO_FETCH_DATA":
      return { ...state, data: state.previousData, previousData: null }; // Restore previous data
    default:
      return state;
  }
};

const AccordionToDoList = () => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    data: hardcodedData,
  });
  const [selectedStatus, setSelectedStatus] = useState("All");

  useEffect(() => {
    if (!state.data) return;

    const projects = state.data.company.flatMap((department) =>
      department.teams.flatMap((team) =>
        team.projects.map((project) => ({
          team: team.team,
          project: project.project,
          tasks: project.tasks,
        })),
      ),
    );

    const completedTasks = [];
    const notStartedTasks = [];
    const inProgressTasks = [];

    projects.forEach(({ team, project, tasks }) => {
      tasks.forEach((task) => {
        if (task.status === "Completed") {
          completedTasks.push({ team, project, task });
        } else if (task.status === "Not Started") {
          notStartedTasks.push({ team, project, task });
        } else if (task.status === "In Progress") {
          inProgressTasks.push({ team, project, task });
        }
      });
    });

    dispatch({ type: "SET_COMPLETED_TASKS", payload: completedTasks });
    dispatch({ type: "SET_NOT_STARTED_TASKS", payload: notStartedTasks });
    dispatch({ type: "SET_IN_PROGRESS_TASKS", payload: inProgressTasks });
  }, [state.data]);

  const fetchData = () => {
    const newData = fetchNewData();
    dispatch({ type: "SET_DATA", payload: newData });
  };

  const undoFetchData = () => {
    dispatch({ type: "UNDO_FETCH_DATA" });
  };

  return (
    <Box p={{ base: 4, md: 8 }} maxW="7xl" mx="auto">
      <VStack spacing={8}>
        <Heading as="h1" size="xl" textAlign="center">
          Accordion To-Do List
        </Heading>
        <FilterForm
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          fetchData={fetchData}
        />
        <Button
          colorScheme="red"
          onClick={undoFetchData}
          isDisabled={!state.previousData}
          mb={4}
        >
          Undo Fetch Data
        </Button>
        {selectedStatus === "All" || selectedStatus === "Not Started" ? (
          <Box w="full">
            <Heading as="h2" size="lg" mb={4}>
              Not Started Tasks
            </Heading>
            <TaskAccordion tasks={state.notStartedTasks} status="Not Started" />
          </Box>
        ) : null}
        {selectedStatus === "All" || selectedStatus === "In Progress" ? (
          <Box w="full">
            <Heading as="h2" size="lg" mb={4}>
              In Progress Tasks
            </Heading>
            <TaskAccordion tasks={state.inProgressTasks} status="In Progress" />
          </Box>
        ) : null}
        {selectedStatus === "All" || selectedStatus === "Completed" ? (
          <Box w="full">
            <Heading as="h2" size="lg" mb={4}>
              Completed Tasks
            </Heading>
            <TaskAccordion tasks={state.completedTasks} status="Completed" />
          </Box>
        ) : null}
      </VStack>
    </Box>
  );
};

export default AccordionToDoList;
