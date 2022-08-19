import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCartSelector } from '../../redux/cart/selectors';

import { Cart, Container } from '../../components';

const CartPage: FC = () => {
  const { totalPrice, items, totalCount } = useSelector(getCartSelector);

  return (
    <Container isCartContainer={true}>
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
    </Container>
  );
};

export default CartPage;
