import { useEffect } from 'react';

import { Categories, Sort, PizzaList, Pagination } from '../components';

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <main className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Усі піци</h2>
        <PizzaList />
        <Pagination />
      </div>
    </main>
  );
};

export default Home;
