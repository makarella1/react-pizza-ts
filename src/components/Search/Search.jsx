import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchByTerm } from '../../redux/slices/filterSlice';

import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  const inputRef = useRef();

  const termChangeHandler = (event) => {
    dispatch(searchByTerm(event.target.value));
  };

  const clearHandler = () => {
    dispatch(searchByTerm(''));
    inputRef.current.focus();
  };

  return (
    <div className={styles.searchWrapper}>
      <svg
        className={styles.searchIcon}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M31 28h-1.59l-.55-.55c1.96-2.27 3.14-5.22 3.14-8.45 0-7.18-5.82-13-13-13s-13 5.82-13 13 5.82 13 13 13c3.23 0 6.18-1.18 8.45-3.13l.55.55v1.58l10 9.98 2.98-2.98-9.98-10zm-12 0c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
      <input
        className={styles.input}
        type="text"
        placeholder="Шукати піцу"
        value={searchTerm}
        onChange={termChangeHandler}
        ref={inputRef}
      />
      {searchTerm.length > 0 && (
        <svg
          className={styles.clearIcon}
          onClick={clearHandler}
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
        </svg>
      )}
    </div>
  );
};
export default Search;
