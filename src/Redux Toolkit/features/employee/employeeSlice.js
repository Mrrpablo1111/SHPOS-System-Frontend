const { mockEmployees } = require("@/pages/branch/Orders/data");
const { createSlice } = require("@reduxjs/toolkit");

const employeeSlice = createSlice({
    name:"employee",
    initialState: {
        employeeSlice: mockEmployees,
    },
});

export default employeeSlice.reducer;