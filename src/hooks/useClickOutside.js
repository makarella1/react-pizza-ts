import { useEffect } from 'react';

export const useClickOutside = (ref, closeHandler) => {
  useEffect(() => {
    const clickOutsideHandler = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
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
