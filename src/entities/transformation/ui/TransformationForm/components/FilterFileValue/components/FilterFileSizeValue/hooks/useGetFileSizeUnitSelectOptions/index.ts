import { FileSizeUnit } from '@entities/file';
import { FILE_SIZE_UNIT_DISPLAY } from '@entities/file/@x/transformation';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetFileSizeUnitSelectOptions = () => {
  const { t } = useTranslation('file');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: Object.values(FileSizeUnit),
      renderLabel: (data) => t(FILE_SIZE_UNIT_DISPLAY[data]),
      renderValue: (data) => data,
    });
  }, [t]);
};
