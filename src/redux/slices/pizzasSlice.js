import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchData } from '../../services/pizzasService';

const initialState = {
  items: [],
  totalCount: 1,
  isLoading: false,
  isError: false,
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async (options, { rejectWithValue }) => {
    try {
      const data = await fetchData(options);

      return data;
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
      state.items = action.payload.pizzas;
      state.totalCount = action.payload.count;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.isLoading = false;
      state.items = initialState.items;
      state.isError = true;
    });
  },
});

export const { setItems } = pizzasSlice.actions;

export default pizzasSlice.reducer;
