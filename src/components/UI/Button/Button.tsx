import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  isCart?: boolean;
  isDark?: boolean;
  isAdd?: boolean;
  isCircle?: boolean;
  isOutline?: boolean;
  isActive?: boolean;
  isBack?: boolean;
  isPay?: boolean;
  isRemove?: boolean;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  isAdd,
  isCart,
  isCircle,
  isDark,
  isOutline,
  isActive,
  isBack,
  isPay,
  isRemove,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        `${styles.button}`,
        className && `${className}`,
        isAdd && `${styles.addButton}`,
        isCart && `${styles.cartButton}`,
        isCircle && `${styles.circleButton}`,
        isDark && `${styles.darkButton}`,
        isOutline && `${styles.outlineButton}`,
        isActive && `${styles.activeButton}`,
        isBack && `${styles.backButton}`,
        isPay && `${styles.payButton}`,
        isRemove && `${styles.removeButton}`
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
