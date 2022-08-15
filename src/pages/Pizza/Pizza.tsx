import { useEffect, FC } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { fetchPizzaById } from '../../redux/slices/pizzaSlice';
import { getPizzaSelector } from '../../redux/slices/pizzaSlice';

import styles from './Pizza.module.scss';

const Pizza: FC = () => {
  const { item, isLoading } = useSelector(getPizzaSelector);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPizzaById(id));
  }, [id, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <div className="content">
        <div className={styles.pizzaWrapper}>
          <img
            className={styles.pizzaImage}
            src={item.imageUrl}
            alt={item.name}
          />
          <h2 className={styles.pizzaTitle}>{item.name}</h2>
          <h4 className={styles.pizzaPrice}>{item.price} ₴</h4>
          <p className={styles.pizzaDescription}>{item.description}</p>
          <Link className="button button--outline button--add" to="/">
            <span>На головну</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Pizza;
