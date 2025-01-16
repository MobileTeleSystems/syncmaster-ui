import { CronSegmentValue, CronService } from '@shared/services';
import dayjs, { Dayjs } from 'dayjs';

import { Period } from '../../types';

import { UseCronProps } from './types';

/** Hook for handling value of CronSelect component */
export const useCron = ({ value, onChange = () => undefined }: UseCronProps) => {
  const cronService = new CronService(value);

  const handleChange = () => onChange(cronService.toString());

  const handleChangePeriod = (period: Period) => {
    switch (period) {
      case Period.DAY:
        cronService.setMonthDay(null);
        cronService.setWeekDay(null);
        break;
      case Period.WEEK:
        cronService.setWeekDay(dayjs().day());
        break;
      case Period.MONTH:
        cronService.setMonthDay(dayjs().date());
        break;
    }
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
    cronService.setMinute(time?.minute() ?? dayjs().minute());
    cronService.setHour(time?.hour() ?? dayjs().hour());
    handleChange();
  };

  const getPeriodSelectValue = () => {
    if (cronService.getMonthDay() === null && cronService.getWeekDay() === null) {
      return Period.DAY;
    }
    if (cronService.getMonthDay()) {
      return Period.MONTH;
    }
    return Period.WEEK;
  };

  return {
    periodSelectValue: getPeriodSelectValue(),
    weekDay: cronService.getWeekDay(),
    monthDay: cronService.getMonthDay(),
    time: dayjs(cronService.getTime(), 'HH:mm'),
    handleChangePeriod,
    handleChangeMonthDay,
    handleChangeWeekDay,
    handleChangeTime,
  };
};
