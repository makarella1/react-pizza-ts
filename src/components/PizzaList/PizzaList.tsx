import { useEffect, useRef, useMemo, FC, memo, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { PizzaItem, PizzasSkeleton } from '../index';

import { setFilters } from '../../redux/filter/slice';
import { getFilterSelector } from '../../redux/filter/selectors';
import { getPizzasSelector } from '../../redux/pizzas/selectors';

import { fetchPizzas } from '../../redux/pizzas/slice';

import { useAppDispatch } from '../../redux/store';

import styles from './PizzaList.module.scss';

const LIMIT = 4;

const PizzaList: FC = memo(() => {
  const [searchParams, setSearchParams] = useSearchParams();

  const hasQueries = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useAppDispatch();

  const {
    currentPage,
    searchTerm,
    categoryId,
    filter: { sort },
  } = useSelector(getFilterSelector);

  const { items, isLoading, isError } = useSelector(getPizzasSelector);

  const category = categoryId === 0 ? '' : categoryId;

  const options = useMemo(
    () => ({
      currentPage: currentPage.toString(), //Just so setSearchParams won't be yelling at me for non-strings in search params
      category: category.toString(),
      sort,
      limit: LIMIT,
    }),
    [category, sort, currentPage]
  );

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({
        category: options.category,
        currentPage: options.currentPage,
        sort: options.sort,
      });
    }

    isMounted.current = true;
  }, [options, setSearchParams]);

  useEffect(() => {
    if (window.location.search) {
      dispatch(
        setFilters({
          categoryId: searchParams.get('category') ?? 0,
          currentPage: searchParams.get('currentPage') ?? 1,
          sort: searchParams.get('sort') ?? 'price',
        })
      );

      hasQueries.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPizzas(options));
    };

    if (!hasQueries.current) {
      fetchData();
    }

    hasQueries.current = false;
  }, [options, dispatch]);

  //I won't be searching through backend because mockAPI can't give me such an opportunity (it can technically but it doesn't work on practice)
  const pizzas = useMemo<ReactNode>(
    () =>
      items
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((pizza) => <PizzaItem {...pizza} key={pizza.id} />),
    [searchTerm, items]
  );

  const skeletons = [...Array(LIMIT)].map((_, index) => (
    <PizzasSkeleton key={index} />
  ));

  return (
    <div className={styles.items}>
      {isError && (
        <div className={styles.error}>
          <h2>Упс... виникла помилка :(</h2>
          <p>Спробуйте завітати трохи пізніше, піца вже буде чекати на вас!</p>
        </div>
      )}
      {isLoading && skeletons}
      {!isLoading && pizzas}
    </div>
  );
});
export default PizzaList;
