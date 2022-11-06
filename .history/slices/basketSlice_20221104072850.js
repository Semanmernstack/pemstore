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
            state.user = action.payload;
        },
        

    },

});

export const { addtoBasket } = basketSlice.actions;



export const selectitems = (state) => state.basket.items;

export default basketSlice.reducer;
