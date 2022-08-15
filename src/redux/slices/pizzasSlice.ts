import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { fetchData } from '../../services/pizzasService';
import { RootState } from '../store';

import { setTotalPages } from './filterSlice';

import { IPizzaItem, IOptions } from './../../models';

interface PizzasSliceState {
  items: IPizzaItem[];
  totalCount: number;
  isLoading: boolean;
  isError: boolean;
}

const initialState: PizzasSliceState = {
  items: [],
  totalCount: 1,
  isLoading: false,
  isError: false,
};

export const fetchPizzas = createAsyncThunk<IPizzaItem[], IOptions>(
  'pizzas/fetchPizzas',
  async (options, { rejectWithValue, dispatch }) => {
    try {
      const { pizzas, count } = await fetchData(options);

      dispatch(setTotalPages(Math.ceil(count / options.limit!)));

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
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<IPizzaItem[]>) => {
        state.isLoading = false;
        state.items = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.isLoading = false;
      state.items = initialState.items;
      state.isError = true;
    });
  },
});

export const getPizzasSelector = (state: RootState) => state.pizzas;

export default pizzasSlice.reducer;
