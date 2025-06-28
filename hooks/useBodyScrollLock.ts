import { useEffect } from 'react';

/**
 * Custom hook to lock body scroll when a modal or overlay is active.
 * @param {boolean} isLocked - Whether the body scroll should be locked.
 */
export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isLocked) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};
