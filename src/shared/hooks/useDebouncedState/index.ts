import { useCallback, useEffect, useRef, useState } from 'react';

import { UseDebouncedStateProps } from './types';

/** Hook for handling debounced state */
export function useDebouncedState<T>({ initialValue, delay, onDebounce = () => undefined }: UseDebouncedStateProps<T>) {
  const [value, setValue] = useState(initialValue);
  const timeoutRef = useRef<number | null>(null);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!);
  useEffect(() => clearTimeout, []);

  const setDebouncedValue = useCallback(
    (newValue: T) => {
      clearTimeout();
      timeoutRef.current = window.setTimeout(() => {
        setValue(newValue);
        onDebounce(newValue);
      }, delay);
    },
    [delay, onDebounce],
  );

  const setValueImmediately = (newValue: T) => {
    clearTimeout();
    setValue(newValue);
    onDebounce(newValue);
  };

  return { value, setValue: setValueImmediately, setDebouncedValue };
}
