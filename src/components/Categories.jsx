import { useState } from 'react';

import { CATEGORIES_DATA } from '../utils/utilityData';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_DATA.map((categorie, index) => (
          <li
            className={`${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
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
