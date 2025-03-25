import { CronSegmentKey, CronSegmentValue, DayOfWeek, Period } from './types';

export const CRON_VALUE_DEFAULT = new Map<CronSegmentKey, CronSegmentValue>([
  ['minute', new Date().getMinutes()],
  ['hour', new Date().getHours()],
  ['date', null],
  ['day', null],
]);

export const DAY_OF_WEEK_DISPLAY = {
  [`${DayOfWeek.MONDAY}`]: 'monday',
  [`${DayOfWeek.TUESDAY}`]: 'tuesday',
  [`${DayOfWeek.WEDNESDAY}`]: 'wednesday',
  [`${DayOfWeek.THURSDAY}`]: 'thursday',
  [`${DayOfWeek.FRIDAY}`]: 'friday',
  [`${DayOfWeek.SATURDAY}`]: 'saturday',
  [`${DayOfWeek.SUNDAY}`]: 'sunday',
} as const;

export const PERIOD_DISPLAY = {
  [Period.DAY]: 'day',
  [Period.WEEK]: 'week',
  [Period.MONTH]: 'month',
} as const;
