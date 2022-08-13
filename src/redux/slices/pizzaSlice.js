import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPizza } from '../../services/pizzasService';

const initialState = {
  item: {},
  isLoading: false,
  isError: false,
};

export const fetchPizzaById = createAsyncThunk(
  'pizza/fetchPizzaById',
  async (id) => {
    const data = await fetchPizza(id);

    return data;
  }
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzaById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizzaById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.item = action.payload;
    });
  },
});

export const getPizzaSelector = (state) => state.pizza;

export default pizzaSlice.reducer;
