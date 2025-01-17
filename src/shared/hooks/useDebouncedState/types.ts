/**
 * Interface as Props type of "useDebouncedState" hook.
 *
 * @template T - Value type.
 */
export interface UseDebouncedStateProps<T> {
  /** Initial value */
  initialValue: T;
  /** Debounce timeout */
  delay: number;
  /** Callback for handling debounced state change */
  onDebounce?: (value: T) => void;
}
