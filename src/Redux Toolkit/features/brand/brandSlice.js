import { createSlice } from "@reduxjs/toolkit";

const branchSlice = createSlice({
  name: "branch",
  initialState: {
    branch: { id: "branch-1" },
  },
});

export default branchSlice.reducer;