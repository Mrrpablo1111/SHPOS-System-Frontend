import { mockOrders } from "@/pages/branch/Orders/data";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getOrderByBranch = createAsyncThunk(
    "orders/getOrdersByBranch",
    async(filters)=>{
        const data = mockOrders.filter((order)=>{
            return (
                order.branchId === filters.branchId && 
                (!filters.cashierId || order.cashierId === filters.cashierId) &&
                (!filters.paymentType || order.paymentType === filters.paymentType) &&
                (!filters.status || order.status === filters.status)
            )
        });
        return data;
    }
);

const orderSlice = createSlice({
    name:"orders",
    initialState:{
        orders: [],
        loading: false,
    },
    extraReducers:(builder) =>{
        builder.addCase(getOrderByBranch.pending, (state) =>{
            state.loading = true;
        })
        .addCase(getOrderByBranch.fulfilled, (state, action)=>{
            state.loading = false;
            state.orders = action.payload;
        })
    }
})

export default orderSlice;