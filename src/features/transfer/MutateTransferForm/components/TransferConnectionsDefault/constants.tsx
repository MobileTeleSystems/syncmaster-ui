import { TransformationType } from '@entities/transformation';

import { FilterColumnsFormItem } from '../FilterColumnsFormItem';
import { FilterFileFormItem } from '../FilterFileFormItem';
import { FilterRowsFormItem } from '../FilterRowsFormItem';
import { FilterSqlFormItem } from '../FilterSqlFormItem';

import { FilterTypeConfig } from './types';

export const FILTER_TYPES_CONFIG: Record<TransformationType, FilterTypeConfig> = {
  [TransformationType.FILTER_FILE]: {
    title: 'filterFile',
    filter: <FilterFileFormItem canHaveEmptyRecordsList />,
  },
  [TransformationType.FILTER_ROWS]: {
    title: 'filterRows',
    filter: <FilterRowsFormItem canHaveEmptyRecordsList />,
  },
  [TransformationType.FILTER_COLUMNS]: {
    title: 'filterColumns',
    filter: <FilterColumnsFormItem canHaveEmptyRecordsList />,
  },
  [TransformationType.FILTER_SQL]: {
    title: 'filterSql',
    filter: <FilterSqlFormItem canHaveEmptyRecordsList />,
  },
} as const;
