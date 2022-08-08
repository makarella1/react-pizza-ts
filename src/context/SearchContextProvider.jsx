import { createContext, useState } from 'react';

export const SearchContext = createContext({
  searchCategory: '',
  sortBy: '',
  setSearchCategory: (categoryId) => {},
  setSortTerm: (term) => {},
  searchTerm: '',
  setSearchTerm: (term) => {},
  currentPage: 0,
  setCurrentPage: (page) => {},
  totalPages: 0,
  setTotalPages: (totalPages) => {},
});

export const SearchContextProvider = ({ children }) => {
  const [searchCategory, setSearchCategory] = useState(0);
  const [sortTerm, setSortTerm] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const contextValue = {
    searchCategory,
    sortBy: sortTerm,
    setSearchCategory,
    setSortTerm,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
