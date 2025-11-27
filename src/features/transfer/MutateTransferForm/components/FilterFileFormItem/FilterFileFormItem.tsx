import React, { memo } from 'react';
import { FilterFormItemProps, TransformationForm, TransformationType } from '@entities/transformation';
import { useTranslation } from 'react-i18next';

export const FilterFileFormItem = memo(
  <T extends TransformationType>({ canHaveEmptyRecordsList }: FilterFormItemProps<T>) => {
    const { t } = useTranslation('transformation');

    return (
      <TransformationForm
        transformationType={TransformationType.FILTER_FILE}
        nestedTypeSelectLabel={t('type', { ns: 'shared' })}
        canHaveEmptyRecordsList={canHaveEmptyRecordsList}
      />
    );
  },
);
