import { Routes, Route } from 'react-router-dom';
import { Wrapper, Header } from './components';
import { Home, Cart, NotFound, Pizza } from './pages';

import './scss/app.scss';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizzas/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
