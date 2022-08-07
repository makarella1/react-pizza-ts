import { useEffect, useState, useContext } from 'react';

import { PizzaItem, Skeleton } from './index';
import { SearchContext } from '../context/SearchContextProvider';

const PizzaList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pizzaData, setPizzaData] = useState([]);

  const { searchCategory, sortBy } = useContext(SearchContext);
  const categoryId = searchCategory === 0 ? '' : searchCategory;

  console.log(searchCategory);

  useEffect(() => {
    const order = sortBy.includes('-') ? 'asc' : 'desc';
    const sortTerm = sortBy.replace('-', '');

    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?category=${categoryId}&sortBy=${sortTerm}&order=${order}`
      );

      if (!res.ok) {
        alert('error');
      }

      const data = await res.json();
      setPizzaData(data);
      setIsLoading(false);
    };

    fetchData();
  }, [categoryId, sortBy]);

  return (
    <div className="content__items">
      {isLoading && [...Array(10)].map((_, index) => <Skeleton key={index} />)}
      {!isLoading &&
        pizzaData.map((pizza) => <PizzaItem {...pizza} key={pizza.id} />)}
    </div>
  );
};
export default PizzaList;
