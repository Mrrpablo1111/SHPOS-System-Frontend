import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api";
//function to get jwt token
const getAuthToken = () =>{
    const token = localStorage.getItem('jwt');
    if(!token){
        throw new Error('No jwt token found')
    }
    return token;
}

// function to set auth headers

const getAuthHeaders = () =>{
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
    };
};

// create product

export const createProduct = createAsyncThunk(
    "product/create",
    async (dto, {rejectWithValue}) =>{
        try {
            console.log('Creating product...', {dto});

            const headers = getAuthHeaders();
            const response = await api.post("/api/products", dto, {headers});

            console.log('product created  successfully:', response.data);
            return response.data;
        } catch (err) {
            console.error('Failed to create product:', {
                error: err.response?.data || err.message,
                status: err.response?.status,
                statusText: err.response?.statusText,
                requestData: dto
            });
            return rejectWithValue(err.response?.data?.message || "Failed to create product");
        }
    }
);

// Get product By Id 
export const getProductById = createAsyncThunk(
    "product/getById",
    
)

