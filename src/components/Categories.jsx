import { useContext } from 'react';

import { CATEGORIES_DATA } from '../utils/utilityData';

import { SearchContext } from '../context/SearchContextProvider';

const Categories = () => {
  const { searchCategory, setSearchCategory } = useContext(SearchContext);

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_DATA.map((categorie, index) => (
          <li
            className={`${searchCategory === index ? 'active' : ''}`}
            onClick={() => setSearchCategory(index)}
            key={index}
          >
            {categorie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
