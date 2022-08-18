import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCartSelector } from '../../redux/cart/selectors';

import { Cart, Container } from '../../components';

import styles from './CartPage.module.scss';

const CartPage: FC = () => {
  const { totalPrice, items, totalCount } = useSelector(getCartSelector);

  return (
    <div className={styles.content}>
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
    </div>
  );
};

export default CartPage;
