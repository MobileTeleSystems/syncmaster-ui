export type CronSegmentValue<T extends number = number> = T | null;

export type CronSegmentKey = 'date' | 'day' | 'hour' | 'minute';

export enum Period {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export enum DayOfWeek {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}
