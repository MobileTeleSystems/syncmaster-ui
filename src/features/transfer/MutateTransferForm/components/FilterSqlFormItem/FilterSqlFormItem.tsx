import { memo } from 'react';
import { FilterFormItemProps, TransformationForm, TransformationType } from '@entities/transformation';

export const FilterSqlFormItem = memo(
  <T extends TransformationType>({ canHaveEmptyRecordsList }: FilterFormItemProps<T>) => {
    return (
      <TransformationForm
        transformationType={TransformationType.FILTER_SQL}
        canHaveEmptyRecordsList={canHaveEmptyRecordsList}
        hasSqlField
      />
    );
  },
);
