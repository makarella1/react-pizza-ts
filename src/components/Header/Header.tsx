import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Container, Button } from '../index';

import { useSelector } from 'react-redux';
import { getCartSelector } from '../../redux/cart/selectors';

import pizzaLogo from '../../assets/img/pizza-logo.svg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import styles from './Header.module.scss';

const Header: FC = memo(() => {
  const { totalCount, totalPrice } = useSelector(getCartSelector);

  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <Link to="/">
          <div className={styles.headerLogo}>
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>Найсмачніша піца у всьому Всесвіті! Чесно.</p>
            </div>
          </div>
        </Link>
        <Search />

        <Link to="/cart">
          <Button isCart={true}>
            <span>{totalPrice} ₴</span>
            <div className={styles.buttonDelimetr} />
            <AiOutlineShoppingCart size={20} />
            <span>{totalCount}</span>
          </Button>
        </Link>
      </Container>
    </header>
  );
});
export default Header;
