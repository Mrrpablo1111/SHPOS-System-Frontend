import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    selectedCustomer: null,
    note: "",
    discount: {type: "percentage", value: 0},
    paymentMethod: "cash",
    heldOrder: [],
    currentOrder: null,
}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            const item = action.payload;
            const existingItem = state.cartItems.find(i => i.id===item.id);

            if(existingItem){
                existingItem.quantity += 1;
            }else{
                state.cartItems.push({...item, quantity:1});
            }
        },


        updateCartItemQuantity: (state, action) => {
            const {id, quantity} = action.payload;

            if(quantity <= 0){
                state.cartItems = state.cartItems.filter((item) => item.id !== id);
            }else{
                const item = state.cartItems.find((item) => item.id === id);
                if(item){
                    item.quantity = quantity;
                }
            }
        },

        removeFromCart:(state, action) =>{
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item)=> item.id !== id);
        },
        

        clearCart: (state) =>{
            state.cartItems = [];
            state.selectedCustomer = null;
            state.note = "",
            state.discount = {type: "percentage", value: 0};
            state.paymentMethod= "cash";
            state.currentOrder = null;
            
        },

        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload;
        },

        setNote: (state, action) =>{
            state.note = action.payload;
        },

        setDiscount: (state, action) => {
            state.discount = action.payload;
        },

        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        },

        holdOder: (state,) => {
            if(state.cartItems.length > 0){
                const heldOrder = {
                    id: Date.now(),
                    cartItems: [...state.cartItems],
                    customer: state.selectedCustomer,
                    note: state.note,
                    discount: state.discount,
                    timestamp: new Date(),
                };

                state.heldOrder.push(heldOrder);

                // Reset current order 
                state.cartItems = [];
                state.selectedCustomer = null;
                state.note = "",
                state.discount = {type: "percentage", value: 0};
            }
        },

        resumeOrder: (state, action)=> {
            const order = action.payload;

            state.cartItems = order.cartItems;
            state.selectedCustomer = order.customer;
            state.note = order.note;
            state.discount = order.discount;

            // Remove from held order
            state.heldOrder = state.heldOrder.filter((o) => o.id !=order.id);
        },

        setCurrentOrder:(state, action) => {
            state.currentOrder = action.payload;
        },

        resetOrder: (state) =>{
            state.cartItems = [];
            state.selectedCustomer = null;
            state.note = "";
            state.discount = {type: "percentage", value: 0};
            state.paymentMethod = "cash";
            state.currentOrder = null;
        }
        
    }
});

// Selector
export const selectCartItems = (state) => state.cart.cartItems;
export const selectedCartItemCount  = (state) => state.cart.cartItems.length;
export const selectedCustomer = (state) => state.cart.selectedCustomer;
export const selectNote = (state) => state.cart.note;
export const selectDiscount = (state) => state.cart.discount;
export const selectPaymentMethod = (state) => state.cart.paymentMethod;
export const selectHeldOrder = (state) => state.cart.heldOrder;
export const selectCurrentOrder = (state) => state.cart.currentOrder;

//Calculation selectors
export const selectSubtotal = (state) =>{
    return state.cart.cartItems.reduce((total, item) => total + item.sellingPrice * item.quantity, 0);
}

export const selectTax = (state) => {
    const subtotal= selectSubtotal(state);
    return  subtotal * 0.10;
}

export const selectDiscountAmount = (state) => {
    const subtotal = selectSubtotal(state);
    const discount = state.cart.discount;

    if(discount.type === "percentage"){
        return subtotal * (discount.value/100);
    }else{
        return discount.value;
    }
};

export const selectTotal = (state) => {
    const subtotal = selectSubtotal(state);
    const tax =selectTax(state);
    const discountAmount = selectDiscountAmount(state);

    return subtotal + tax - discountAmount;
}

export const {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    setSelectedCustomer,
    setNote,
    setDiscount,
    setPaymentMethod,
    holdOrder,
    resumeOrder,
    setCurrentOrder,
    resetOrder,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;