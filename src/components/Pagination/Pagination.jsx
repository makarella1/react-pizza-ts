import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPage } from '../../redux/slices/filterSlice';
import { getFilterSelector } from '../../redux/slices/filterSlice';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const [activePage, setActivePage] = useState(0);

  const dispatch = useDispatch();
  const { totalPages } = useSelector(getFilterSelector);

  const changePageHandler = (index) => {
    setActivePage(index);
    dispatch(setPage(index + 1));
  };

  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          className={
            activePage === index
              ? `${styles.button} ${styles.buttonActive}`
              : `${styles.button}`
          }
          onClick={changePageHandler.bind(null, index)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
