import { useSearchParams } from 'react-router-dom';

import { useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PizzaItem, Skeleton } from './index';

import { setTotalPages, setFilters } from '../redux/slices/filterSlice';

import { fetchPizzas } from '../redux/slices/pizzasSlice';

const LIMIT = 4;

const PizzaList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const hasQueries = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const { items, totalCount, isLoading, isError } = useSelector(
    (state) => state.pizzas
  );

  const {
    categoryId,
    filter: { sort },
  } = useSelector((state) => state.filter);

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
      dispatch(fetchPizzas(options));
      dispatch(setTotalPages(Math.ceil(totalCount / LIMIT)));
    };

    if (!hasQueries.current) {
      fetchData();
    }

    hasQueries.current = false;
  }, [options, totalCount, dispatch]);

  //I won't be searching through backend because mockAPI can't give me such an opportunity (it can technically but it doesn't work on practice)
  const pizzas = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((pizza) => <PizzaItem {...pizza} key={pizza.id} />);

  const skeletons = [...Array(LIMIT)].map((_, index) => (
    <Skeleton key={index} />
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
