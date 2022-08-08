import { useEffect, useState, useContext } from 'react';

import { PizzaItem, Skeleton } from './index';
import { SearchContext } from '../context/SearchContextProvider';

const LIMIT = 4;

const PizzaList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pizzaData, setPizzaData] = useState([]);

  const { searchCategory, sortBy, searchTerm, currentPage, setTotalPages } =
    useContext(SearchContext);
  const categoryId = searchCategory === 0 ? '' : searchCategory;

  useEffect(() => {
    const order = sortBy.includes('-') ? 'asc' : 'desc';
    const sortTerm = sortBy.replace('-', '');

    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${currentPage}&limit=${LIMIT}&category=${categoryId}&sortBy=${sortTerm}&order=${order}$count`
      );

      if (!res.ok) {
        alert('error');
      }

      const data = await res.json();
      setPizzaData(data.pizzas);
      setTotalPages(Math.ceil(data.count / LIMIT));
      setIsLoading(false);
    };

    fetchData();
  }, [categoryId, sortBy, currentPage, setTotalPages]);

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
