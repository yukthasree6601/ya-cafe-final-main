import { createSlice } from "@reduxjs/toolkit";

// Define the cartSlice with a mandatory 'name' property
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      // Corrected the typo
      return { items: [] };
    },
  },
});

// Export actions and the reducer
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions; // Exported clearCart
export default cartSlice.reducer;
