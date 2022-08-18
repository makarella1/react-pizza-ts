import { FC, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Wrapper, Header } from './components';

const Home = lazy(() => import('./pages/Home/Home'));
const CartPage = lazy(() => import('./pages/CartPage/CartPage'));
const Pizza = lazy(() => import('./pages/Pizza/Pizza'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

const App: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Wrapper>
  );
};

export default App;
