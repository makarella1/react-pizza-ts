import axios from 'axios';

import { IOptions, IPizzaItem } from '../models';

interface PizzasResponse {
  pizzas: IPizzaItem[];
  count: number;
}

export const fetchData = async (options: IOptions) => {
  const { data } = await axios.get<PizzasResponse>(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${options.currentPage}&limit=${options.limit}&category=${options.category}&sortBy=${options.sort}`
  );

  return data;
};

export const fetchPizza = async (id: string) => {
  const { data } = await axios.get<IPizzaItem>(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas/${id}`
  );

  return data;
};
