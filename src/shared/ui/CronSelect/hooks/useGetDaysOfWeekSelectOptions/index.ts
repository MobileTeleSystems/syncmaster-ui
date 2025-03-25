import { DayOfWeek } from '@shared/services';
import { DAY_OF_WEEK_DISPLAY } from '@shared/services';
import { prepareOptionsForSelect } from '@shared/ui';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useGetDaysOfWeekSelectOptions = () => {
  const { t } = useTranslation('shared');

  return useMemo(() => {
    return prepareOptionsForSelect({
      data: Object.values(DayOfWeek),
      renderLabel: (data) => t(DAY_OF_WEEK_DISPLAY[data as DayOfWeek]),
      renderValue: (data) => data,
    });
  }, [t]);
};
