import { TransferConnectionFileIncrementBy, TRANSFER_CONNECTION_FILE_INCREMENT_BY_DISPLAY } from '@entities/transfer';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetIncrementBySelectOptions = () => {
  const { t } = useTranslation('file');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: Object.values(TransferConnectionFileIncrementBy),
      renderLabel: (data) => t(TRANSFER_CONNECTION_FILE_INCREMENT_BY_DISPLAY[data]),
      renderValue: (data) => data,
    });
  }, [t]);
};
