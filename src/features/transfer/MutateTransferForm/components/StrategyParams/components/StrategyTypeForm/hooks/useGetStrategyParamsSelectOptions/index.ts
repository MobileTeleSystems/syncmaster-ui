import { TransferStrategyType, TRANSFER_STRATEGY_TYPE_DISPLAY } from '@entities/transfer';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetStrategyParamsSelectOptions = () => {
  const { t } = useTranslation('transfer');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: Object.values(TransferStrategyType),
      renderLabel: (data) => t(TRANSFER_STRATEGY_TYPE_DISPLAY[data]),
      renderValue: (data) => data,
    });
  }, [t]);
};
