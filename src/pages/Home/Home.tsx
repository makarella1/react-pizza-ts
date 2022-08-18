import { useEffect, FC } from 'react';

import {
  Categories,
  Sort,
  PizzaList,
  Pagination,
  Container,
} from '../../components';

import styles from './Home.module.scss';

const Home: FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <main className={styles.homeWrapper}>
      <Container>
        <div className={styles.homeTop}>
          <Categories />
          <Sort />
        </div>
        <h2 className={styles.homeTitle}>Усі піци</h2>
        <PizzaList />
        <Pagination />
      </Container>
    </main>
  );
};

export default Home;
