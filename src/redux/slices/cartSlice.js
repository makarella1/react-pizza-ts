import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundItem = state.items.find(
        (item) =>
          item.size === action.payload.size &&
          item.type === action.payload.type &&
          item.name === action.payload.name
      );

      if (!foundItem) {
        state.items.push({
          ...action.payload,
          count: 1,
          id: nanoid(), // We need to pass in some new ID because every new item in the cart requires unique ID
        });
      } else {
        foundItem.count += 1;
      }

      state.totalPrice = state.items.reduce(
        (sum, { count, price }) => (sum += count * price),
        0
      );

      state.totalCount += 1;
    },
    removeItem: (state, action) => {
      const foundItem = state.items.find((item) => item.id === action.payload);

      if (foundItem.count > 1) {
        foundItem.count -= 1;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }

      state.totalPrice -= foundItem.price;
      state.totalCount -= 1;
    },
    clearItems: (state) => {
      state.items = initialState.items;
      state.totalCount = initialState.totalCount;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export const getCartSelector = (state) => state.cart;

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
