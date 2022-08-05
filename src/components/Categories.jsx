import { useState } from 'react';

import { CATEGORIES_DATA } from '../utils/categoriesData';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_DATA.map((option, index) => (
          <li
            className={`${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            key={index}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Categories;
