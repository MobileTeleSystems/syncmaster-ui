import { Period, PERIOD_DISPLAY } from '@shared/services';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetPeriodSelectOptions = () => {
  const { t } = useTranslation('cron');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: Object.values(Period),
      renderLabel: (data) => t(PERIOD_DISPLAY[data]),
      renderValue: (data) => data,
    });
  }, [t]);
};
