import { SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

/**
 * Hook for handling debounced state
 *
 * @param initialValue - initial state
 * @param delay - state change timeout
 */
export function useDebouncedState<T>(initialValue: T, delay: number) {
  const [value, setValue] = useState(initialValue);
  const timeoutRef = useRef<number | null>(null);

  const clearTimeout = () => window.clearTimeout(timeoutRef.current!);
  useEffect(() => clearTimeout, []);

  const setDebouncedValue = useCallback(
    (newValue: SetStateAction<T>) => {
      clearTimeout();
      timeoutRef.current = window.setTimeout(() => {
        setValue(newValue);
      }, delay);
    },
    [delay],
  );

  const setValueImmediately = (newValue: T) => {
    clearTimeout();
    setValue(newValue);
  };

  return { value, setValue: setValueImmediately, setDebouncedValue };
}
