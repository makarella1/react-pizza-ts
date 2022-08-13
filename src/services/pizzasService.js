import axios from 'axios';

export const fetchData = async ({ currentPage, limit, category, sort }) => {
  const { data } = await axios.get(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas?page=${currentPage}&limit=${limit}&category=${category}&sortBy=${sort}`
  );

  return data;
};

export const fetchPizza = async (id) => {
  const { data } = await axios.get(
    `https://62ee5a4dc1ef25f3da874f12.mockapi.io/pizzas/${id}`
  );

  return data;
};
