// src/dataSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the data slice
const initialState = {
  data: [], // Empty array to hold the data
};

// Create a slice with actions and reducers
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    // Action to update the data slice
    updateDataSlice: (state, action) => {
      state.data = action.payload; // Update the data state with the payload
    },
  },
});

// Export the action created by the slice
export const { updateDataSlice } = dataSlice.actions;

// Selector to get the current data from the state
export const selectData = (state) => state.data.data;

// Export the reducer to be used in the store
export default dataSlice.reducer;
