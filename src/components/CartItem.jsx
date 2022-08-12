import { useDispatch } from 'react-redux';

import { HiMinus, HiPlus } from 'react-icons/hi';

import { addItem, removeItem } from '../redux/slices/cartSlice';

const CartItem = ({
  imageUrl = '',
  name = '',
  type = '',
  size = 0,
  price = 0,
  count = 0,
  id = 0,
}) => {
  const dispatch = useDispatch();

  const addItemHandler = () => {
    const pizzaItem = {
      id,
      type,
      size,
    };

    dispatch(addItem(pizzaItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
        <p>
          {type} тісто, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <button
          className="button button--outline button--circle cart__item-count-minus"
          onClick={removeItemHandler}
        >
          <HiMinus />
        </button>
        <b>{count}</b>
        <button
          className="button button--outline button--circle cart__item-count-plus"
          onClick={addItemHandler}
        >
          <HiPlus />
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price} ₴</b>
      </div>
      <div className="cart__item-remove">
        <button className="button button--outline button--circle">
          <HiPlus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;