import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper, Header } from './components';
import { Home, CartPage, NotFound, Pizza } from './pages';

import './scss/app.scss';

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizzas/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
