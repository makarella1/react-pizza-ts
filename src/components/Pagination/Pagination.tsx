import { useState, FC, useEffect, memo } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';

import { setPage } from '../../redux/filter/slice';
import { getFilterSelector } from '../../redux/filter/selectors';

import { Button } from '../index';

import styles from './Pagination.module.scss';

const Pagination: FC = memo(() => {
  const [activePage, setActivePage] = useState(0);

  const dispatch = useAppDispatch();
  const { totalPages, currentPage } = useSelector(getFilterSelector);

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

  useEffect(() => {
    setActivePage(currentPage - 1);
  }, [currentPage]);

  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          onClick={changePageHandler.bind(null, index)}
          key={index}
          isOutline={true}
          isCircle={true}
          {...{ isActive: activePage === index }}
        >
          {index + 1}
        </Button>
      ))}
    </div>
  );
});
export default Pagination;
