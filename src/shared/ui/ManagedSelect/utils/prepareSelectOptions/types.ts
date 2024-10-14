/**
 * Interface as Props for utility "prepareOptionsForSelect"
 *
 * @template T - Data object type for select options.
 */
export interface PrepareOptionsForSelectProps<T> {
  /** Value for option from data object */
  value: keyof T;
  /** Label for option from data object */
  label: keyof T | ((item: T) => string);
  /** Initial data for creating options */
  data?: T[];
}
