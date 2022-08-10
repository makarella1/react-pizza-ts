import { useDispatch, useSelector } from 'react-redux';

import { filterByCategory } from '../redux/slices/filterSlice';

import { CATEGORIES_DATA } from '../utils/utilityData';

const Categories = () => {
  const dispatch = useDispatch();

  const categoryId = useSelector((state) => state.filter.categoryId);

  return (
    <div className="categories">
      <ul>
        {CATEGORIES_DATA.map((categorie, index) => (
          <li
            className={`${categoryId === index ? 'active' : ''}`}
            onClick={() => dispatch(filterByCategory(index))}
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
