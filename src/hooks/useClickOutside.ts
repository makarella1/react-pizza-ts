import { useEffect } from 'react';

export const useClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  closeHandler: () => void
) => {
  useEffect(() => {
    const clickOutsideHandler = (event: TouchEvent | MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      } else {
        closeHandler();
      }
    };

    document.addEventListener('mousedown', clickOutsideHandler);
    document.addEventListener('touchstart', clickOutsideHandler);

    return () => {
      document.removeEventListener('mousedown', clickOutsideHandler);
      document.removeEventListener('touchstart', clickOutsideHandler);
    };
  }, [ref, closeHandler]);
};
