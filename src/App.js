import { Wrapper, Categories, Header, Sort, PizzaList } from './components';

import './scss/app.scss';

const App = () => {
  return (
    <Wrapper>
      <Header />
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
    </Wrapper>
  );
};

export default App;
