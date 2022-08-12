import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchData } from '../../services/pizzasService';

import { setTotalPages } from './filterSlice';

const initialState = {
  items: [],
  totalCount: 1,
  isLoading: false,
  isError: false,
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (options, { rejectWithValue, dispatch }) => {
    try {
      const { pizzas, count } = await fetchData(options);

      dispatch(setTotalPages(Math.ceil(count / options.limit)));

      return pizzas;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.isLoading = false;
      state.items = initialState.items;
      state.isError = true;
    });
  },
});

export const getPizzasSelector = (state) => state.pizzas;

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
