import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.home}>
      <h1>Упс, нічого не знайдено...</h1>
      <span>😐</span>
    </div>
  );
};
export default NotFound;
