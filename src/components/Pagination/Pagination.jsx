import { useContext, useState } from 'react';

import { SearchContext } from '../../context/SearchContextProvider';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const [activePage, setActivePage] = useState(0);
  const { totalPages, setCurrentPage } = useContext(SearchContext);

  const changePageHandler = (index) => {
    setActivePage(index);
    setCurrentPage(index + 1);
  };

  return (
    <div className={styles.pagination}>
      {[...Array(totalPages)].map((_, index) => (
        <button
          className={
            activePage === index
              ? `${styles.button} ${styles.buttonActive}`
              : `${styles.button}`
          }
          onClick={changePageHandler.bind(null, index)}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};
export default Pagination;
