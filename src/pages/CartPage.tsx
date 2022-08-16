import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCartSelector } from '../redux/cart/selectors';

import { Cart } from '../components';

const CartPage: FC = () => {
  const { totalPrice, items, totalCount } = useSelector(getCartSelector);

  return (
    <div className="content">
      <div className="container container--cart">
        {totalCount === 0 ? (
          <Cart isEmpty={true} />
        ) : (
          <Cart
            items={items}
            totalCount={totalCount}
            totalPrice={totalPrice}
            isEmpty={false}
          />
        )}
      </div>
    </div>
  );
};
export default CartPage;
