import axios from 'axios';

import { IOptions, IPizzaItem } from '../models';

const URL = process.env.REACT_APP_API_URL;

interface PizzasResponse {
  pizzas: IPizzaItem[];
  count: number;
}

export const fetchData = async (options: IOptions) => {
  const { data } = await axios.get<PizzasResponse>(
    `${URL}?page=${options.currentPage}&limit=${options.limit}&category=${options.category}&sortBy=${options.sort}`
  );

  return data;
};

export const fetchPizza = async (id: string) => {
  const { data } = await axios.get<IPizzaItem>(`${URL}/${id}`);

  return data;
};
