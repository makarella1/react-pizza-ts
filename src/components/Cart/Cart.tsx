import { FC } from 'react';
import { useAppDispatch } from '../../redux/store';

import { Link } from 'react-router-dom';
import { CartItem, Button } from '..';

import { clearItems } from '../../redux/cart/slice';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

import { ICartItem } from '../../models';

import styles from './Cart.module.scss';

import emptyCartImg from './../../assets/img/empty-cart.png';

interface CartProps {
  items?: ICartItem[];
  totalPrice?: number;
  totalCount?: number;
  isEmpty: boolean;
}

const Cart: FC<CartProps> = ({ items, totalPrice, totalCount, isEmpty }) => {
  const dispatch = useAppDispatch();

  const clearCartHandler = () => {
    dispatch(clearItems());
  };

  if (isEmpty) {
    return (
      <div className={styles.cartEmpty}>
        <h2>Агов! А де піца?</h2>
        <p>
          Нам здається, що ви ще не замовили жодної піци.
          <br />
          Для того, щоб це виправити, натисніть на кнопку нижче та перейдіть на
          головну :)
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link to="/">
          <Button className={styles.cartEmptyButton} isDark={true}>
            <span>На головну</span>
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cartTop}>
        <h2 className={styles.cartTitle}>
          <AiOutlineShoppingCart />
          Кошик
        </h2>
        <div className={styles.cartClear} onClick={clearCartHandler}>
          <BsTrash />
          <span>Очистити кошик</span>
        </div>
      </div>
      <div className={styles.cartItem}>
        {items?.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <div className={styles.cartBottom}>
        <div className={styles.cartDetails}>
          <span>
            Усього піц: <b>{totalCount} шт.</b>
          </span>
          <span>
            Ціна замовлення: <b>{totalPrice} ₴</b>
          </span>
        </div>
        <div className={styles.cartButtons}>
          <Link to="/">
            <Button isAdd={true} isOutline={true} isBack={true}>
              <IoIosArrowBack />

              <span>На головну</span>
            </Button>
          </Link>

          <Button isPay={true}>
            <span>Замовити зараз</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
