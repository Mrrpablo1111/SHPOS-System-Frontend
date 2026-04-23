import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order/orderSlice";
import employeeReducer from "./features/employee/employeeSlice";
import branchReducer from "./features/branch/branchSlice";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    employee: employeeReducer,
    branch: branchReducer,
  },
});