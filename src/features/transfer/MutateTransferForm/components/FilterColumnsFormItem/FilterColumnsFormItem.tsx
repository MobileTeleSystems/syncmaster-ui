import React, { memo } from 'react';
import { FilterFormItemProps, TransformationForm, TransformationType } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

export const FilterColumnsFormItem = memo(
  <T extends TransformationType>({ canHaveEmptyRecordsList }: FilterFormItemProps<T>) => {
    const { t } = useTranslation('transformation');

    return (
      <TransformationForm
        transformationType={TransformationType.FILTER_COLUMNS}
        nestedTypeSelectLabel={t('type', { ns: 'shared' })}
        canHaveEmptyRecordsList={canHaveEmptyRecordsList}
        hasColumnField
      />
    );
  },
);
