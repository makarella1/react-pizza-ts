import { useSelector } from 'react-redux';

import { getCartSelector } from '../redux/slices/cartSlice';

import { Cart } from '../components';

const CartPage = () => {
  const { totalPrice, items, totalCount } = useSelector(getCartSelector);

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount === 0 ? (
          <Cart isEmpty />
        ) : (
          <Cart items={items} totalCount={totalCount} totalPrice={totalPrice} />
        )}
      </div>
    </div>
  );
};
export default CartPage;
