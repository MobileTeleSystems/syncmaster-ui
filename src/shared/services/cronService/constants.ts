import { CronSegmentKey, CronSegmentValue, DayOfWeekName } from './types';

export const CRON_VALUE_DEFAULT = new Map<CronSegmentKey, CronSegmentValue>([
  ['minute', new Date().getMinutes()],
  ['hour', new Date().getHours()],
  ['date', null],
  ['day', null],
]);

export const DAYS_OF_WEEK = Object.values(DayOfWeekName);
