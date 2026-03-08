
const initialState = {
    products:[], 
    product:null,
    searchResults: [],
    loading: false,
    error: null,

};

const product = createSlice({
    name: "product",
    initialState,
})