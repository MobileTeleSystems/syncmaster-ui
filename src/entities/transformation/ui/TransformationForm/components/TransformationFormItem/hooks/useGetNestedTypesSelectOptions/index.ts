import {
  TransformationFilterColumnsType,
  TRANSFORMATION_FILTER_COLUMNS_TYPE_DISPLAY,
  TransformationFilterFileType,
  TRANSFORMATION_FILTER_FILE_TYPE_DISPLAY,
  TransformationFilterRowsType,
  TRANSFORMATION_FILTER_ROWS_TYPE_DISPLAY,
  TransformationType,
  TransformationsFormWithNestedType,
} from '@entities/transformation';
import { OptionItem, prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetNestedTypesSelectOptions = (transformationType: TransformationsFormWithNestedType) => {
  const { t } = useTranslation('transformation');

  const options = useMemo(() => {
    const filterRowsTypeSelectOptions = prepareOptionsForSelect({
      data: Object.values(TransformationFilterRowsType),
      renderLabel: (data) => t(TRANSFORMATION_FILTER_ROWS_TYPE_DISPLAY[data]),
      renderValue: (data) => data,
    });

    const filterColumnsTypeSelectOptions = prepareOptionsForSelect({
      data: Object.values(TransformationFilterColumnsType),
      renderLabel: (data) => t(TRANSFORMATION_FILTER_COLUMNS_TYPE_DISPLAY[data]),
      renderValue: (data) => data,
    });

    const filterFileTypeSelectOptions = prepareOptionsForSelect({
      data: Object.values(TransformationFilterFileType),
      renderLabel: (data) => t(TRANSFORMATION_FILTER_FILE_TYPE_DISPLAY[data]),
      renderValue: (data) => data,
    });

    const filterOptions: Record<
      TransformationsFormWithNestedType,
      OptionItem<TransformationFilterRowsType | TransformationFilterColumnsType | TransformationFilterFileType>[]
    > = {
      [TransformationType.FILTER_FILE]: filterFileTypeSelectOptions,
      [TransformationType.FILTER_ROWS]: filterRowsTypeSelectOptions,
      [TransformationType.FILTER_COLUMNS]: filterColumnsTypeSelectOptions,
    };

    return filterOptions;
  }, [t]);

  return options[transformationType];
};
