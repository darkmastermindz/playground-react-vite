import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice"; // Import the data reducer from the slice

// Configure the Redux store with the reducer
export const store = configureStore({
  reducer: {
    data: dataReducer, // Add the data slice reducer
  },
});
