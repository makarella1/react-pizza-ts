import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  isCartContainer?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  isCartContainer,
}) => {
  return (
    <div
      className={clsx(
        `${styles.container}`,
        isCartContainer && `${styles.cartContainer}`,
        className && `${className}`
      )}
    >
      {children}
    </div>
  );
};

export default Container;
