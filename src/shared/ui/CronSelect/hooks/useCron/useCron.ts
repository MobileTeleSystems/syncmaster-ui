import { CronSegmentValue, CronService, Period } from '@shared/services';
import dayjs, { Dayjs } from 'dayjs';

import { UseCronProps } from './types';

/** Hook for handling value of CronSelect component */
export const useCron = ({ value, onChange = () => undefined }: UseCronProps) => {
  const cronService = new CronService(value);

  const handleChange = () => onChange(cronService.toString());

  const handleChangePeriod = (period: Period) => {
    cronService.setPeriod(period);
    handleChange();
  };

  const handleChangeWeekDay = (weekDay: CronSegmentValue) => {
    cronService.setWeekDay(weekDay);
    handleChange();
  };

  const handleChangeMonthDay = (monthDay: CronSegmentValue) => {
    cronService.setMonthDay(monthDay);
    handleChange();
  };

  const handleChangeTime = (time: Dayjs | null) => {
    cronService.setTime(time?.hour(), time?.minute());
    handleChange();
  };

  return {
    period: cronService.getPeriod(),
    weekDay: cronService.getWeekDay(),
    monthDay: cronService.getMonthDay(),
    time: dayjs(cronService.getTime(), 'HH:mm'),
    handleChangePeriod,
    handleChangeMonthDay,
    handleChangeWeekDay,
    handleChangeTime,
  };
};
