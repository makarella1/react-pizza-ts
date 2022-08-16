import { FC } from 'react';
import { useAppDispatch } from '../redux/store';

import { Link } from 'react-router-dom';
import { CartItem } from '.';

import { clearItems } from '../redux/cart/slice';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

import { ICartItem } from '../models';

import emptyCartImg from './../assets/img/empty-cart.png';

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
      <div className="cart cart--empty">
        <h2>Агов! А де піца?</h2>
        <p>
          Нам здається, що ви ще не замовили жодної піци.
          <br />
          Для того, щоб це виправити, натисніть на кнопку нижче та перейдіть на
          головну :)
        </p>
        <img src={emptyCartImg} alt="Empty cart" />
        <Link className="button button--black" to="/">
          <span>На головну</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart__top">
        <h2 className="content__title">
          <AiOutlineShoppingCart />
          Кошик
        </h2>
        <div className="cart__clear" onClick={clearCartHandler}>
          <BsTrash />
          <span>Очистити кошик</span>
        </div>
      </div>
      <div className="content__items">
        {items?.map((item) => (
          <CartItem {...item} key={item.id} />
        ))}
      </div>
      <div className="cart__bottom">
        <div className="cart__bottom-details">
          <span>
            Усього піц: <b>{totalCount} шт.</b>
          </span>
          <span>
            Ціна замовлення: <b>{totalPrice} ₴</b>
          </span>
        </div>
        <div className="cart__bottom-buttons">
          <Link
            to="/"
            className="button button--outline button--add go-back-btn"
          >
            <IoIosArrowBack />

            <span>На головну</span>
          </Link>
          <button className="button pay-btn">
            <span>Замовити зараз</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
