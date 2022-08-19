import { FC, memo, ReactNode, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { useAppDispatch } from '../../redux/store';

import { filterByCategory, setPage } from '../../redux/filter/slice';
import { getFilterSelector } from '../../redux/filter/selectors';

import { CATEGORIES_DATA } from '../../utils/utilityData';

import styles from './Categories.module.scss';

const Categories: FC = memo(() => {
  const dispatch = useAppDispatch();

  const { categoryId } = useSelector(getFilterSelector);

  const categoryChangeHandler = useCallback(
    (index: number) => {
      dispatch(filterByCategory(index));
      dispatch(setPage(1));
    },
    [dispatch]
  );

  const categories = useMemo<ReactNode>(
    () =>
      CATEGORIES_DATA.map((categorie, index) => (
        <li
          className={clsx(
            `${styles.listItem}`,
            categoryId === index && `${styles.listItemActive}`
          )}
          onClick={categoryChangeHandler.bind(null, index)}
          key={index}
        >
          {categorie.name}
        </li>
      )),
    [categoryId, categoryChangeHandler]
  );

  return (
    <div className={styles.categories}>
      <ul>{categories}</ul>
    </div>
  );
});

export default Categories;
