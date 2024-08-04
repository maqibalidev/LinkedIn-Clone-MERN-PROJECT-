import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [], // Change the initial state to an empty array
  reducers: {
    addUser: (state, action) => {
      // Return a new state by creating a copy of the current state array and adding the new user
  state.push(action.payload)
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer; // Use "reducer" instead of "reducers"
