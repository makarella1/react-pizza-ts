import { useEffect, useState } from 'react';

import { PizzaItem, Skeleton } from './index';

const PizzaList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pizzaData, setPizzaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas'
      );

      if (!res.ok) {
        alert('error');
      }

      const data = await res.json();
      setPizzaData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="content__items">
      {isLoading && [...Array(10)].map((_, index) => <Skeleton key={index} />)}
      {!isLoading &&
        pizzaData.length > 0 &&
        pizzaData.map((pizza) => <PizzaItem {...pizza} key={pizza.id} />)}
    </div>
  );
};
export default PizzaList;
