import { createContext, useState } from 'react';

export const SearchContext = createContext({
  searchCategory: '',
  sortBy: '',
  setSearchCategory: (categoryId) => {},
  setSortTerm: (term) => {},
});

export const SearchContextProvider = ({ children }) => {
  const [searchCategory, setSearchCategory] = useState(0);
  const [sortTerm, setSortTerm] = useState('rating');

  const contextValue = {
    searchCategory,
    sortBy: sortTerm,
    setSearchCategory,
    setSortTerm,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
