import { FC } from 'react';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <div className={styles.home}>
      <h1>Упс, нічого не знайдено...</h1>
      <span>😐</span>
    </div>
  );
};
export default NotFound;
