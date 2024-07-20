import React from "react";
import { Select, Button } from "@chakra-ui/react";

const FilterForm = ({ selectedStatus, setSelectedStatus, fetchData }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <label htmlFor="statusSelect" className="mr-2">
        Filter by status:
      </label>
      <Select
        id="statusSelect"
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="mr-4"
      >
        <option value="All">All</option>
        <option value="Not Started">Not Started</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </Select>
      <Button colorScheme="teal" onClick={fetchData}>
        Fetch New Data
      </Button>
    </div>
  );
};

export default FilterForm;
