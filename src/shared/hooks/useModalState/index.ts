import { useCallback, useState } from 'react';

/** Hook for handling modal state */
export const useModalState = () => {
  const [isOpened, setOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return { isOpened, handleOpen, handleClose };
};
