import {
  TransformationFilterColumnsType,
  TransformationFilterRowsType,
  TransformationType,
} from '@entities/transformation';
import { OptionItem, prepareOptionsForSelect } from '@shared/ui';

export const FILTER_ROWS_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(TransformationFilterRowsType),
  renderLabel: (data) => data.replaceAll('_', ' '),
  renderValue: (data) => data,
});

export const FILTER_COLUMNS_TYPE_SELECT_OPTIONS = prepareOptionsForSelect({
  data: Object.values(TransformationFilterColumnsType),
  renderLabel: (data) => data,
  renderValue: (data) => data,
});

export const NESTED_TYPES_SELECT_OPTIONS: Record<
  TransformationType,
  OptionItem<TransformationFilterRowsType | TransformationFilterColumnsType>[]
> = {
  [TransformationType.FILTER_ROWS]: FILTER_ROWS_TYPE_SELECT_OPTIONS,
  [TransformationType.FILTER_COLUMNS]: FILTER_COLUMNS_TYPE_SELECT_OPTIONS,
};
