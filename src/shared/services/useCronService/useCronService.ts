import { CronService } from '@shared/services';
import { useTranslation } from 'react-i18next';

import { UseCronServiceProps } from './types';

export const useCronService = ({ value }: UseCronServiceProps) => {
  const { t } = useTranslation('cron');

  return new CronService(t, value);
};
