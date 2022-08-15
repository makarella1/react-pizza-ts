import axios from 'axios';

interface Options {
  currentPage: number;
  limit: number;
  category: string;
  sort: string;
}

export const fetchData = async (options: Options) => {
  const { data } = await axios.get(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${options.currentPage}&limit=${options.limit}&category=${options.category}&sortBy=${options.sort}`
  );

  return data;
};

export const fetchPizza = async (id: string) => {
  const { data } = await axios.get(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas/${id}`
  );

  return data;
};
