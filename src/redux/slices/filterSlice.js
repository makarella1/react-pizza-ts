import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    filterByCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    searchByTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    sort: (state, action) => {
      state.filter = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = +action.payload.currentPage;
      state.categoryId = +action.payload.categoryId;
      state.filter.sort = action.payload.sort;
    },
  },
});

export default filterSlice.reducer;

export const getFilterSelector = (state) => state.filter;

export const {
  setPage,
  setTotalPages,
  filterByCategory,
  searchByTerm,
  sort,
  setFilters,
} = filterSlice.actions;
