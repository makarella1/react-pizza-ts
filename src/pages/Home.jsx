import { Categories, Sort, PizzaList } from '../components';

const Home = () => {
  return (
    <main className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Усі піци</h2>
        <PizzaList />
      </div>
    </main>
  );
};

export default Home;
