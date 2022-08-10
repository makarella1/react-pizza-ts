import axios from 'axios';

import { useSearchParams } from 'react-router-dom';

import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PizzaItem, Skeleton } from './index';

import { setTotalPages, setFilters } from '../redux/slices/filterSlice';

const LIMIT = 4;

const PizzaList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pizzaData, setPizzaData] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const hasQueries = useRef(false);
  const isMounted = useRef(false);

  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const {
    categoryId,
    filter: { sort },
  } = useSelector((state) => state.filter);

  const category = categoryId === 0 ? '' : categoryId;

  useEffect(() => {
    if (isMounted.current) {
      setSearchParams({ category, currentPage, sort });
    }

    isMounted.current = true;
  }, [category, currentPage, sort, setSearchParams]);

  useEffect(() => {
    if (window.location.search) {
      dispatch(
        setFilters({
          categoryId: searchParams.get('category') || 0,
          currentPage: searchParams.get('currentPage'),
          sort: searchParams.get('sort'),
        })
      );

      hasQueries.current = true;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await axios
        .get(
          `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${currentPage}&limit=${LIMIT}&category=${category}&sortBy=${sort}`
        )
        .catch((error) => alert(error));

      setPizzaData(data.pizzas);

      dispatch(setTotalPages(Math.ceil(data.count / LIMIT)));

      setIsLoading(false);
    };

    if (!hasQueries.current) {
      fetchData();
    }

    hasQueries.current = false;
  }, [category, sort, currentPage, dispatch]);

  //I won't be searching through backend because mockAPI can't give me such an opportunity (it can technically but it doesn't work on practice)
  const pizzas = pizzaData
    .filter((pizza) =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((pizza) => <PizzaItem {...pizza} key={pizza.id} />);

  const skeletons = [...Array(LIMIT)].map((_, index) => (
    <Skeleton key={index} />
  ));

  return (
    <div className="content__items">
      {isLoading && skeletons}
      {!isLoading && pizzas}
    </div>
  );
};
export default PizzaList;
