import { useState, FC } from 'react';

import { clsx } from 'clsx';

import { useAppDispatch } from '../../redux/store';

import { addItem } from '../../redux/cart/slice';

import { MdOutlineAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { IPizzaItem } from '../../models';
import Button from '../UI/Button/Button';

import styles from './PizzaItem.module.scss';

const PizzaItem: FC<IPizzaItem> = ({
  name = '',
  imageUrl = '',
  price = 0,
  types = [],
  sizes = [],
  id = '',
}) => {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const dispatch = useAppDispatch();

  const addPizzaHandler = () => {
    const pizzaItem = {
      name,
      imageUrl,
      price,
      type: types[activeType],
      size: sizes[activeSize],
      id,
    };

    dispatch(addItem(pizzaItem));
  };

  return (
    <div className={styles.pizzaItem}>
      <Link to={`/pizzas/${id}`}>
        <img className={styles.pizzaItemImg} src={imageUrl} alt={name} />
        <h4 className={styles.pizzaItemTitle}>{name}</h4>
      </Link>
      <div className={styles.pizzaItemSelector}>
        <ul>
          {types.map((type, index) => (
            <li
              className={clsx(
                activeType === index && `${styles.activePizzaSelector}`
              )}
              onClick={() => setActiveType(index)}
              key={index}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              className={clsx(
                activeSize === index && `${styles.activePizzaSelector}`
              )}
              onClick={() => setActiveSize(index)}
              key={index}
            >{`${size} см.`}</li>
          ))}
        </ul>
      </div>

      <div className={styles.pizzaItemBottom}>
        <div className={styles.pizzaItemPrice}>від {price} ₴</div>
        <Button isOutline={true} isAdd={true} onClick={addPizzaHandler}>
          <MdOutlineAdd />
          <span>Додати</span>
        </Button>
      </div>
    </div>
  );
};
export default PizzaItem;
