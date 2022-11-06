import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};




export const basketSlice = createSlice({
    name: "basket",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addtoBasket: (state, action) => {
            state.items = [...state.items, action.payload]
        },
        

    },

});

export const { addtoBasket } = basketSlice.actions;



export const selectItems = (state) => state.basket?.items;

export default basketSlice.reducer;
