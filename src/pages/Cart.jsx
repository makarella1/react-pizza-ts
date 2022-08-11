import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { clearItems } from '../redux/slices/cartSlice';

import { CartItem } from '../components';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { IoIosArrowBack } from 'react-icons/io';

const Cart = () => {
  const { totalPrice, items, totalCount } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const clearCartHandler = () => {
    dispatch(clearItems());
  };

  return (
    <div className="content">
      <div className="container container--cart">
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
            {items.map((item) => (
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
      </div>
    </div>
  );
};
export default Cart;
