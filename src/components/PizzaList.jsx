import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PizzaItem, Skeleton } from './index';

import { setTotalPages } from '../redux/slices/filterSlice';

const LIMIT = 4;

let isInitial = true;

const PizzaList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pizzaData, setPizzaData] = useState([]);

  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.filter.currentPage);
  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const filterCategory = useSelector((state) => state.filter.filterCategory);
  const sortBy = useSelector((state) => state.filter.sortBy);

  const categoryId = filterCategory === 0 ? '' : filterCategory;

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${currentPage}&limit=${LIMIT}&category=${categoryId}&sortBy=${sortBy}`
      );

      if (!res.ok) {
        alert('error');
      }

      const data = await res.json();
      setPizzaData(data.pizzas);

      if (isInitial) {
        dispatch(setTotalPages(Math.ceil(data.count / LIMIT)));
      }

      setIsLoading(false);

      isInitial = false;
    };

    fetchData();
  }, [categoryId, sortBy, currentPage, dispatch]);

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
