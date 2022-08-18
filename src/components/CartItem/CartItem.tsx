import { FC } from 'react';

import { useAppDispatch } from '../../redux/store';

import { HiMinus, HiPlus } from 'react-icons/hi';

import { addItem, removeItem } from '../../redux/cart/slice';

import { Button } from '../index';

import { ICartItem } from '../../models';

import styles from './CartItem.module.scss';

const CartItem: FC<ICartItem> = ({
  imageUrl,
  name,
  type,
  size,
  price,
  count,
  id,
}) => {
  const dispatch = useAppDispatch();

  const addItemHandler = () => {
    const pizzaItem = {
      id,
      type,
      size,
      name,
    };

    dispatch(addItem(pizzaItem));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemImg}>
        <img src={imageUrl} alt="Pizza" />
      </div>
      <div className={styles.cartItemInfo}>
        <h3>{name}</h3>
        <p>
          {type} тісто, {size} см.
        </p>
      </div>
      <div className={styles.cartItemCount}>
        <Button isOutline={true} isCircle={true} onClick={removeItemHandler}>
          <HiMinus />
        </Button>
        <b>{count}</b>
        <Button isOutline={true} isCircle={true} onClick={addItemHandler}>
          <HiPlus />
        </Button>
      </div>
      <div className={styles.cartItemPrice}>
        <b>{price} ₴</b>
      </div>
      <div className={styles.cartItemRemove}>
        <Button isOutline={true} isCircle={true} isRemove={true}>
          <HiPlus />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
