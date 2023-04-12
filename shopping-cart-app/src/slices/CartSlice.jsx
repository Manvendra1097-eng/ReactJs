import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const products = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = [...products];
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
