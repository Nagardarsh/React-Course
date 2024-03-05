import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //mutating the state here (modifying state)
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        //originlState  = {items: ["pizza"]}
        clearCart: (state) => {
            //rtk- sither mutate the existing state or return a new state
            state.items.length = 0;
            //or return it
            // return {items: []}; //this new[] will be replaced inside originlState= {items: []};
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;