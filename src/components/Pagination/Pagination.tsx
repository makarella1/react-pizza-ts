import { useState, FC, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';

import { setPage } from '../../redux/filter/slice';
import { getFilterSelector } from '../../redux/filter/selectors';

import styles from './Pagination.module.scss';

const Pagination: FC = memo(() => {
  const [activePage, setActivePage] = useState(0);

  const dispatch = useAppDispatch();
  const { totalPages } = useSelector(getFilterSelector);

  const changePageHandler = (index: number) => {
    setActivePage(index);
    dispatch(setPage(index + 1));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [activePage]);

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
});
export default Pagination;
