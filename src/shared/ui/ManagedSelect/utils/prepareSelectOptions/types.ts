import { DefaultOptionType } from 'antd/lib/select';

/**
 * Interface as Props for utility "prepareOptionsForSelect"
 *
 * @template T - Data object type for select options.
 */
export interface PrepareOptionsForSelectProps<T> {
  /** Function render value for option from data object */
  renderValue: (item: T) => DefaultOptionType['value'];
  /** Function render label for option from data object */
  renderLabel: (item: T) => DefaultOptionType['label'];
  /** Initial data for creating options */
  data?: T[];
}
