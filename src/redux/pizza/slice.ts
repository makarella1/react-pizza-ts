import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { fetchPizza } from '../../services/pizzasService';

import { IPizzaItem } from './../../models';
import { PizzaSliceState } from './types';

const initialState: PizzaSliceState = {
  item: {
    id: '',
    name: '',
    imageUrl: '',
    price: 0,
    types: [''],
    sizes: [0],
    rating: 0,
    category: 0,
    description: '',
  },
  isLoading: false,
  isError: false,
};

export const fetchPizzaById = createAsyncThunk<IPizzaItem, string>(
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
    builder.addCase(
      fetchPizzaById.fulfilled,
      (state, action: PayloadAction<IPizzaItem>) => {
        state.isLoading = false;
        state.item = action.payload;
      }
    );
  },
});

export default pizzaSlice.reducer;
