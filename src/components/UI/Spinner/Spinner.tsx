import { Oval } from 'react-loader-spinner';

import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Oval height={120} width={120} color="#fe5f1e" secondaryColor="#fff" />
    </div>
  );
};
export default Spinner;
