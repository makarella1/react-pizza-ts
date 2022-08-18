import {
  useState,
  useCallback,
  useRef,
  useEffect,
  FC,
  memo,
  useMemo,
  ReactNode,
} from 'react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useSelector } from 'react-redux';

import { clsx } from 'clsx';

import { useAppDispatch } from '../../redux/store';

import { getFilterSelector } from '../../redux/filter/selectors';

import { OPTIONS_DATA } from '../../utils/utilityData';

import { sort } from '../../redux/filter/slice';

import { AiOutlineSortAscending } from 'react-icons/ai';

import styles from './Sort.module.scss';

const Sort: FC = memo(() => {
  const [categoryId, setCategoryId] = useState(0);
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const {
    filter: { name },
  } = useSelector(getFilterSelector);

  const dispatch = useAppDispatch();

  const popupRef = useRef<HTMLDivElement>(null);

  const closePopup = useCallback(() => setIsPopupOpened(false), []);

  const optionClickHandler = (index: number) => {
    setCategoryId(index);
    setIsPopupOpened(false);
  };

  useEffect(() => {
    dispatch(sort(OPTIONS_DATA[categoryId]));
  }, [categoryId, dispatch]);

  const options = useMemo<ReactNode>(
    () =>
      OPTIONS_DATA.map((option, index) => (
        <li
          className={clsx(categoryId === index && `${styles.activePopupItem}`)}
          onClick={optionClickHandler.bind(null, index)}
          key={index}
        >
          {option.name}
        </li>
      )),
    [categoryId]
  );

  useClickOutside(popupRef, closePopup);

  return (
    <div className={styles.sort}>
      <div className={styles.sortLabel}>
        <AiOutlineSortAscending size={20} />
        <b>Сортувати за:</b>
        <span onClick={() => setIsPopupOpened(true)}>{name}</span>
      </div>
      {isPopupOpened && (
        <div className={styles.sortPopup} ref={popupRef}>
          <ul>{options}</ul>
        </div>
      )}
    </div>
  );
});
export default Sort;
