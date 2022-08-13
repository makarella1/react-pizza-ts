import { useEffect, useRef, useMemo, FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { PizzaItem, PizzasSkeleton } from './index';

import { setFilters } from '../redux/slices/filterSlice';
import { getFilterSelector } from '../redux/slices/filterSlice';
import { getPizzasSelector } from '../redux/slices/pizzasSlice';

import { fetchPizzas } from '../redux/slices/pizzasSlice';
import { IPizzaItem } from '../models';

const LIMIT = 4;

const PizzaList: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const hasQueries = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useDispatch();

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
      currentPage,
      category,
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
      //@ts-ignore
      dispatch(fetchPizzas(options));
    };

    if (!hasQueries.current) {
      fetchData();
    }

    hasQueries.current = false;
  }, [options, dispatch]);

  //I won't be searching through backend because mockAPI can't give me such an opportunity (it can technically but it doesn't work on practice)
  const pizzas = items
    .filter((item: IPizzaItem) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((pizza: IPizzaItem) => <PizzaItem {...pizza} key={pizza.id} />);

  const skeletons = [...Array(LIMIT)].map((_, index) => (
    <PizzasSkeleton key={index} />
  ));

  return (
    <div className="content__items">
      {isError && (
        <div className="content__items-error">
          <h2>Упс... виникла помилка :(</h2>
          <p>Спробуйте завітати трохи пізніше, піца вже буде чекати на вас!</p>
        </div>
      )}
      {isLoading && skeletons}
      {!isLoading && pizzas}
    </div>
  );
};
export default PizzaList;
