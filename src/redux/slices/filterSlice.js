import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: 1,
  totalPages: 1,
  searchTerm: '',
  sortBy: '',
  filterCategory: 0,
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
      state.filterCategory = action.payload;
    },
    searchByTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    sort: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export default filterSlice.reducer;

export const { setPage, setTotalPages, filterByCategory, searchByTerm, sort } =
  filterSlice.actions;
