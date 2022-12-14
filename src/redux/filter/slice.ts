import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterSliceState, Sort } from './types';

const initialState: FilterSliceState = {
  currentPage: 1,
  totalPages: 1,
  searchTerm: '',
  categoryId: 0,
  filter: {
    name: 'популярністю',
    sort: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    filterByCategory: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    searchByTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    sort: (state, action: PayloadAction<Sort>) => {
      state.filter = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = +action.payload.currentPage;
      state.categoryId = +action.payload.categoryId;
      state.filter.sort = action.payload.sort;
    },
  },
});

export const {
  setPage,
  setTotalPages,
  filterByCategory,
  searchByTerm,
  sort,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
